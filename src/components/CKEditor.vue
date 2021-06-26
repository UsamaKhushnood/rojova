<template>
  <textarea v-model="value" :name="'uid_'+uniqNumber" :id="'uid_'+uniqNumber"></textarea>
</template>

<script>
export default {
  name: 'CKEditor',
  props: [ 'value' ],
  computed: {
    localValue: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  data: function () {
    return {
      uniqNumber: 0
    }
  },
  methods: {
    setEditor: function () {
      let vm = this
      let editor = CKEDITOR.replace('uid_' + vm.uniqNumber, {
        skin: 'moono',
        enterMode: CKEDITOR.ENTER_BR,
        shiftEnterMode: CKEDITOR.ENTER_P,
        toolbar: [
          { name: 'basicstyles', groups: [ 'basicstyles' ], items: [ 'Bold', 'Italic', 'Underline', '-', 'TextColor', 'BGColor' ] },
          { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
          { name: 'scripts', items: [ 'Subscript', 'Superscript' ] },
          { name: 'justify', groups: [ 'blocks', 'align' ], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
          { name: 'paragraph', groups: [ 'list', 'indent' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ] },
          { name: 'links', items: [ 'Link', 'Unlink' ] },
          { name: 'insert', items: [ 'Image' ] },
          { name: 'spell', items: [ 'jQuerySpellChecker' ] },
          { name: 'table', items: [ 'Table' ] }
        ]
      })
      editor.on('change', function (evt) {
        vm.$emit('input', evt.editor.getData())
      })
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      vm.setEditor()
    })
  }
}
</script>
