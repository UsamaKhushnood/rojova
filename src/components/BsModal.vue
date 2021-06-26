<template>
  <div class style="display: inline-block;">
    <a href="#" @click.prevent="showModel=true">
      <slot name="button"></slot>
    </a>
    <div :class="smaller?'modal fade modal__'+uniqNumber:'modal right fade modal__'+uniqNumber">
      <div class="modal-dialog">
        <div :class="slim?'slim modal-content':'modal-content'">
          <div :class="'modal-header '+modalBg">
            <button type="button" class="close" aria-label="Close" @click.prevent="closeModal()">
              <span aria-hidden="true" v-if="smaller">&times;</span>
              <i class="fa fa-lg fa-arrow-circle-right" v-if="!smaller"></i>
            </button>
            <h3 class="modal-title">
              <slot name="title"></slot>
            </h3>
          </div>
          <div class="modal-body">
            <div class="model-data" v-if="showModel">
              <slot @close="closeModal()"></slot>
            </div>
          </div>
          <div class="modal-footer" v-if="smaller">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BsModal",
  components: {},
  ...mapState(["ADD_SHOP_SUCCESS"]),
  props: {
    smaller: Boolean,
    slim: Boolean,
    height: Number,
    type: String,
    width: Number
  },
  data: function() {
    return {
      uniqNumber: 0,
      showModel: false
    };
  },
  created() {
    this.$store.watch(
      state => state.ADD_SHOP_SUCCESS,
      async value => {
        console.log(value);
        if (value === true) {
          console.log("notify congratulations");
          await this.close_modal();
          this.$notify({
            group: "ADD SHOP",
            type: "success",
            title: "Success",
            text: "Created New Shop Successfully,"
          });
        }
      }
    );
  },
  computed: {
    modalBg: function() {
      let cssClass = "bg-default";
      if (this.type) {
        cssClass = "bg-" + this.type;
      }
      return cssClass;
    }
  },
  methods: {
    setScrollBar: function() {
      let height = "calc(100vh - 5px)";
      if (this.smaller && !this.height) height = "600px";
      if (this.smaller && this.height) height = this.height + "px";
      $(".modal-body").slimScroll({
        color: "#555",
        alwaysVisible: false,
        height: height,
        distance: "0px"
      });
    },
    show: function() {
      // this.showModel = true;
      $(".modal__" + this.uniqNumber).modal("show");
    },
    toggleModal: function() {
      if (this.showModel) {
        $(".modal__" + this.uniqNumber).modal({ backdrop: "static" });
      } else {
        $(".modal__" + this.uniqNumber).modal("hide");
      }
    },
    closeModal: function() {
      this.showModel = false;
    }
  },
  watch: {
    showModel: function() {
      let vm = this;
      $(document).ready(function() {
        vm.setScrollBar();
        vm.toggleModal();
      });
    }
  },
  created: function() {
    let vm = this;
    $(document).ready(function() {
      vm.setScrollBar();
      // vm.toggleModal()
      vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random());
      if (vm.$parent) vm.$parent.$on("closeModal", vm.closeModal);
    });
  }
};
</script>
