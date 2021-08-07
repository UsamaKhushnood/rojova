<template>
  <div>
    <b-modal
      :id="'edit-category-subcategory-modal' + index"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Add Category"
    >
      <div class="modal-body" id="input-mask">
        <form method="post">
		   <div class="input-group col-xs-12 align-items-center">
              <label class="col-sm-4 control-label mt-0" style="font-size:15px"> Category Name</label>
				<div class="col-sm-7 controls">
				 <input id="title" type="title" class="form-control col-xs-12" name="categ" placeholder="Title">

				</div>
		      <br>
		  </div>
		   <div class="input-group col-xs-12 align-items-center mt-4">
              <label class="col-sm-4 control-label mt-0" style="font-size:15px"> Subcategory Name</label>
				<div class="col-sm-7 controls">
				 <input id="title" type="title" class="form-control col-xs-12" name="categ" placeholder="Title">

				</div>
		      <br>
		  </div>
		</form>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="primary" @click="ok()">
          Save and add new
        </b-button>
        <b-button size="md" variant="primary" @click="cancel()">
         Save and close
        </b-button>

      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
    props: ['index']
}
</script>

