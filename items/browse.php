<?php

if(isset($_GET['collection'])){

    $current_collection = get_collection_for_item($items[0]);
    $pageTitle = __(metadata($current_collection, array('Dublin Core','Title')));
    echo head(array('title'=>$pageTitle,'bodyclass' => 'items browse'));

    echo "<h1>" . $pageTitle . "</h1>";
    $elements_array = array('Description', 'Source');
    foreach ($elements_array as $element) {
        $element_text = metadata($current_collection, array('Dublin Core', $element));
        if($element_text){
            $out = "<h2>" . $element . "</h2>";
            $out .= "<h3>" . $element_text . "</h3>";
            echo $out;
        }   
    }
} elseif (isset($_GET['tags'])){

    $pageTitle = __($_GET['tags']);
    echo head(array('title'=>$pageTitle,'bodyclass' => 'items browse'));
    echo "<h1>tag: " . $pageTitle . "</h1>";    
}
?>

<h2><?php echo __('(%s total items)', $total_results); ?></h2>
<?php echo pagination_links(); ?>

<?php if ($total_results > 0): ?>

<?php
$sortLinks[__('Title')] = 'Dublin Core,Title';
$sortLinks[__('Date')] = 'Dublin Core,Date';
?>
<div id="sort-links">
    <span class="sort-label"><?php echo __('Sort by: '); ?></span><?php echo browse_sort_links($sortLinks); ?>
</div>

<?php endif; ?>

<?php foreach (loop('items') as $item): ?>
<div class="item hentry">
    <h3><strong><?php echo link_to_item(metadata('item', array('Dublin Core', 'Title'), array('snippet'=>75)), array('class'=>'permalink')); ?></strong></h3>
    <div class="item-meta">
    <?php if (metadata('item', 'has thumbnail')): ?>
    <div class="item-img">
        <?php echo link_to_item(item_image('square_thumbnail')); ?>
    </div>
    <?php endif; ?>

    <?php if ($description = metadata('item', array('Dublin Core', 'Description'), array('snippet'=>250))): ?>
    <div class="item-description">
        <?php echo $description; ?>
    </div>
    <?php endif; ?>

    <?php if (metadata('item', 'has tags')): ?>
    <div class="tags"><p><strong><?php echo __('Tags'); ?>:</strong>
        <?php echo tag_string('items'); ?></p>
    </div>
    <?php endif; ?>

    <?php fire_plugin_hook('public_items_browse_each', array('view' => $this, 'item' =>$item)); ?>

    </div><!-- end class="item-meta" -->
</div><!-- end class="item hentry" -->
<?php endforeach; ?>

<?php echo pagination_links(); ?>

<div id="outputs">
    <span class="outputs-label"><?php echo __('Output Formats'); ?></span>
    <?php echo output_format_list(false); ?>
</div>

<?php fire_plugin_hook('public_items_browse', array('items'=>$items, 'view' => $this)); ?>

<?php echo foot(); ?>
