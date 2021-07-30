<template>
  <div>
    <b-modal
      :id="'add-video-category-modal'"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Add Category"
    >
      <div class="modal-body px-0" id="input-mask">
        <form method="post">
		   <div class="input-group col-xs-12" align="center">
              <label class="col-sm-4 control-label mt-0" style="font-size:15px"> Category Name</label>
				<div class="col-sm-7 controls">
				 <input id="title" type="title" class="form-control col-xs-12" name="categ" placeholder="Category Name">

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