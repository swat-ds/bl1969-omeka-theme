##Berlin+ Readme

Date: 8.15.14
Author: Nabil Kashyap (nkashya1@swarthmore.edu)

Berlin+ is an extension of the Berlin Omeka theme customized for Black Liberation 1969 Archive, an Omeka instance sponsored by Swarthmore College Library Digital Scholarship.

###changed files:
+ substituted hardcoded values for variables `css/sass/_screen.scss`
+ added `css/sass/_blacklib.scss`
+ import `_blacklib.scss` in `css/sass/style.scss`
+ added `<span>` to site-title in `header.php`
+ added `_scss` file for Xavier Lee's collection page stylesheet
+ added `package.json/gruntfile.js` in order to replace compass with grunt
+ added google analytics script to `common/footer.php`
+ added livereload script to `common/footer.php`
+ added custom `items/show.php` and custom `items/browse.php`
+ added custom `item-relations-show.php` to ItemRelations plugin
