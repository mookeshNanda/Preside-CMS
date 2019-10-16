(function() {
	var basePath = CKEDITOR.basePath + "../ckeditorExtensions/";
	basePath = basePath.replace( "ckeditor/../", "/" );

	// register our custom plugins
	CKEDITOR.plugins.addExternal( 'widgets'         , basePath+'plugins/widgets/'         , 'plugin.js' );
	CKEDITOR.plugins.addExternal( 'imagepicker'     , basePath+'plugins/imagepicker/'     , 'plugin.js' );
	CKEDITOR.plugins.addExternal( 'attachmentpicker', basePath+'plugins/attachmentpicker/', 'plugin.js' );
	CKEDITOR.plugins.addExternal( 'presidelink'     , basePath+'plugins/presidelink/'     , 'plugin.js' );
	CKEDITOR.plugins.addExternal( 'codesnippet'     , basePath+'plugins/codesnippet/'     , 'plugin.js' );
})();


CKEDITOR.editorConfig = function( config ) {
	// activate our plugins
	config.extraPlugins = "autogrow,widgets,imagepicker,attachmentpicker,presidelink,codesnippet";
	config.codeSnippet_theme = "atelier-dune.dark";
	// the skin we are using
	config.skin = "bootstrapck";

	// configuring the auto imported styles from editor stylesheet (see stylesheetparser plugin)
	config.stylesSet = [];
	config.stylesheetParser_validSelectors = /^(h[1-6]|p|span|pre|li|ul|ol|dl|dt|dd|small|i|b|em|strong|table)\.\w+/;

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre;div';

	// auto grow config
	config.autoGrow_onStartup = true;

	// email obfuscation for link plugin
	config.emailProtection = 'encode';

	config.scayt_sLang = "en_GB";

	// To Remove the CKeditor IFrame plugin by default
	config.removePlugins = 'iframe';

	// Paste from word
	config.pasteFromWordPromptCleanup = true;
	config.disallowedContent = 'font;*[align];*{line-height};*{margin*};';
};