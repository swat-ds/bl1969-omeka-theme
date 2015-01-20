</div><!-- end content -->

<footer>

    <div id="footer-content" class="center-div">
        <?php if($footerText = get_theme_option('Footer Text')): ?>
        <div id="custom-footer-text">
            <p><?php echo get_theme_option('Footer Text'); ?></p>
        </div>
        <?php endif; ?>
        <?php if ((get_theme_option('Display Footer Copyright') == 1) && $copyright = option('copyright')): ?>
        <p><?php echo $copyright; ?></p>
        <?php endif; ?>
        <nav><?php echo public_nav_main()->setMaxDepth(0); ?></nav>
        <p><?php echo __('Proudly powered by <a href="http://omeka.org">Omeka</a>.'); ?></p>

    </div><!-- end footer-content -->

     <?php fire_plugin_hook('public_footer', array('view'=>$this)); ?>

</footer>

<script type="text/javascript">
    jQuery(document).ready(function(){
        Omeka.showAdvancedForm();
               Omeka.dropDown();
    });
</script>
<?php 

    $path = explode('/',$_SERVER['REQUEST_URI']);
    $path = end($path);
    switch($path){

    case "soundtrack":
        echo js_tag('soundtrack-gallery');
        break;
    case "interviews":
        echo js_tag('interviews-json');
        echo js_tag('interviews-gallery');
        break;
    case "enrollment":
        echo "<script type='text/javascript' 
            src='http://d3js.org/d3.v3.min.js'></script>";
        echo js_tag('enrollment-visualization');
        break;
    default:
        echo js_tag('exhibits-json');
        echo js_tag('about');
        break;
    }
?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58250963-1', 'auto');
  ga('send', 'pageview');
</script>
<script src="http://54.210.13.122:35729/livereload.js"></script>
</body>

</html>
