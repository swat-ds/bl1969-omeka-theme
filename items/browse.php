<?php
if(isset($_GET['search'])){
    $pageTitle = "Search:" . __($_GET['search']);
    echo head(array('title'=>$pageTitle,'bodyclass' => 'items browse'));
    echo "<h1>" . $pageTitle . "</h1>";
}elseif(isset($_GET['collection'])){
    $current_collection = get_collection_for_item($items[0]);
    $pageTitle = __(metadata($current_collection, array('Dublin Core','Title')));
    echo head(array('title'=>$pageTitle,'bodyclass' => 'items browse'));

    echo "<div class='collections-browse-metadata'>";
    echo "<h1>" . $pageTitle . "</h1>";
    $elements_array = array('Description', 'Source');
    foreach ($elements_array as $element) {
        $element_text = __(metadata($current_collection, array('Dublin Core', $element)));
        if($element_text){
            $out = "<h3>" . $element . "</h3>";
            $out .= "<h4>" . $element_text . "</h4>";
            echo $out;
        }   
    }
    echo "</div>";
} elseif (isset($_GET['tags']) || isset($_GET['tag'])){

    $pageTitle = (isset($_GET['tags'])) ? __($_GET['tags'])
        : __($_GET['tag']);
    echo head(array('title'=>$pageTitle,'bodyclass' => 'items browse'));
    echo "<h1>tag: " . $pageTitle . "</h1>";    
}
?>

<h3><?php echo __('(%s total items)', $total_results); ?></h3>
<div class="browse-nav">

<?php if ($total_results > 0): ?>
<?php echo pagination_links(); ?>

<?php
$sortLinks[__('Title')] = 'Dublin Core,Title';
$sortLinks[__('Date')] = 'Dublin Core,Date';
?>
<div id="sort-links">
    <span class="sort-label"><?php echo __('Sort by: '); ?></span><?php echo browse_sort_links($sortLinks); ?>
</div>
</div>
<?php endif; ?>

<div id="items-container">
<?php foreach (loop('items') as $item): ?>
<div class="item hentry">
    <h3><strong><?php echo link_to_item(metadata('item', array('Dublin Core', 'Title'), array('snippet'=>70)), array('class'=>'permalink')); ?></strong></h3>
    <div class="item-meta">
    <?php if (metadata('item', 'has thumbnail')): ?>
    <div class="item-img">
        <?php echo link_to_item(item_image('square_thumbnail')); ?>
    </div>
    <?php endif; ?>

<?php /*  if ($description = metadata('item', array('Dublin Core', 'Description'), array('snippet'=>250))): ?>
    <div class="item-description">
        <?php echo $description; ?>
    </div>
    <?php endif;  */ ?> 

    <?php if (metadata('item', 'item_type_name')): ?>
    <div class="item-type"><p><strong><?php echo __('Item type'); ?>:</strong>
        <?php echo __(metadata('item', 'item_type_name')); ?></p>
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
</div>
<?php echo pagination_links(); ?>

<div id="outputs">
    <span class="outputs-label"><?php echo __('Output Formats'); ?></span>
    <?php echo output_format_list(false); ?>
</div>

<?php fire_plugin_hook('public_items_browse', array('items'=>$items, 'view' => $this)); ?>

<?php echo foot(); ?>
