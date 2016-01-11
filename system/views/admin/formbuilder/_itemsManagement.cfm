<cfscript>
	items = args.items ?: [];
</cfscript>

<cfoutput>
	<ul class="list-unstyled form-items">
		<cfloop array="#items#" item="item" index="i">
			#renderView( view="/admin/formbuilder/_workbenchFormItem", args=item )#
		</cfloop>
	</ul>
	<div class="instructions<cfif !items.len()> empty</cfif>">
		<p class="empty-notice">#translateResource( "formbuilder:manage.empty.form.notice")#</p>
		<p class="not-empty-notice">#translateResource( "formbuilder:manage.drag.new.items.instructions")#</p>
		<i class="fa fa-fw fa-lg fa-plus blue"></i>
	</div>
</cfoutput>