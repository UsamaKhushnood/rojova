<template>
  <div>
    <b-modal
      :id="'view-manage-media-item-modal' + index"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="View Items"
    >
      <div class="modal-body" id="input-mask">
        <form method="post">
          <div class="input-group col-xs-12 align-items-center">
            <label class="col-sm-4 control-label mt-0" style="font-size: 15px"
              >Title</label
            >
            <div class="col-sm-7 controls">
              <p>Title Name</p>
            </div>
            <br />
          </div>
          <div class="input-group col-xs-12 align-items-center mt-4">
            <label class="col-sm-4 control-label mt-0" style="font-size: 15px"
              >URL</label
            >
            <div class="col-sm-7 controls">
              <a href="https://youtube.com">www.youtube.com</a>
            </div>
            <br />
          </div>
          <div class="input-group col-xs-12 align-items-center mt-4">
            <label class="col-sm-4 control-label mt-0" style="font-size: 15px"
              >Banner</label
            >
            <div class="col-sm-7 controls">
              <img
                src="@/assets/img/BILLY-ARGEL-GINGA.jpg"
                alt="img"
                width="150px"
              />
            </div>
            <br />
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
  props: ["index"],
};
</script>
