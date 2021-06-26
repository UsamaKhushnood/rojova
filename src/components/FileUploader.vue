<template>
<div :id="'uploader_'+uniqNumber">
  <form class="file-upload-form uploader" enctype="multipart/form-data">
    <input :id="'uploader_element_'+uniqNumber" class="file-upload" type="file" name="fileUpload" accept="image/*">

    <label :for="'uploader_element_'+uniqNumber" class="file-drag">
      <img class="file-image hidden" src="#" alt="Preview">
      <div class="start">
        <i class="fa fa-download" aria-hidden="true"></i>
        <div>&nbsp;<!-- Select a file or drag here --></div>
        <div class="notimage hidden">Please select an image</div>
        <span class="file-upload-btn btn btn-primary">Select a file</span>
      </div>
      <div class="response hidden">
        <div class="messages"></div>
        <progress class="progress file-progress" :value="progressVal" :max="progressMax">
          <span>0</span>%
        </progress>
      </div>
    </label>
  </form>
</div>
</template>

<script>
export default {
  name: 'FileUploader',
  props: [ 'value' ,'setLOGO'],
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
      uniqNumber: 0,
      progressMax: 0,
      progressVal: 0
    }
  },
  watch: {
    localValue (val) {
      if (val) {
        this.parseExistingFile()
      }
    }
  },
  methods: {
    ekUpload: function () {
      let vm = this
      if (window.File && window.FileList && window.FileReader) {
        var fileSelect = $('#uploader_' + vm.uniqNumber + ' .file-upload')
        var fileDrag = $('#uploader_' + vm.uniqNumber + ' .file-drag')
        fileSelect.on('change', vm.fileSelectHandler)
        // Is XHR2 available?
        var xhr = new XMLHttpRequest()
        if (xhr.upload) {
          // File Drop
          fileDrag.on('dragover', vm.fileDragHover)
          fileDrag.on('dragleave', vm.fileDragHover)
          fileDrag.on('drop', vm.fileSelectHandler)
        }
      } else {
        $('#uploader_' + vm.uniqNumber + ' .file-drag').css('display', 'none')
      }
    },
    parseExistingFile: function () {
      let vm = this
      if (vm.localValue) {
        vm.output(
          '<strong> Previous Image </strong>'
        )
        var fileUrl = vm.localValue
        vm.progressMax = vm.progressVal = 100

        $('#uploader_' + vm.uniqNumber + ' .start').addClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .response').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .notimage').addClass('hidden')
        // Thumbnail Preview
        $('#uploader_' + vm.uniqNumber + ' .file-image').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .file-image').attr('src', fileUrl)
      }
    },
    fileSelectHandler: function (e) {
      let vm = this
      var files = e.target.files || e.dataTransfer.files
      vm.fileDragHover(e)
      // for (var i = 0, f; i < files.length; i++) {
      let f = files[0]
      vm.parseFile(f)
      vm.uploadFile(f)
      this.setLOGO(f);
      // }
    },
    fileDragHover: function (e) {
      let vm = this
      var fileDrag = $('#uploader_' + vm.uniqNumber + ' .file-drag')
      e.stopPropagation()
      e.preventDefault()
      fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload')
    },
    output: function (msg) {
      let vm = this
      $('#uploader_' + vm.uniqNumber + ' .messages').html(msg)
    },
    parseFile: function (file) {
      let vm = this
      vm.output(
        '<strong>' + encodeURI(file.name) + '</strong>'
      )
      var imageName = file.name
      var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName)
      if (isGood) {
        $('#uploader_' + vm.uniqNumber + ' .start').addClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .response').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .notimage').addClass('hidden')
        // Thumbnail Preview
        $('#uploader_' + vm.uniqNumber + ' .file-image').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .file-image').attr('src', URL.createObjectURL(file))
      } else {
        $('#uploader_' + vm.uniqNumber + ' .file-image').addClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .notimage').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .start').removeClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .response').addClass('hidden')
        $('#uploader_' + vm.uniqNumber + ' .file-upload-form').reset()
      }
    },
    setProgressMaxValue: function (e) {
      let vm = this
      if (e.lengthComputable) {
        vm.progressMax = e.total
        vm.progressVal = e.loaded
      }
    },
    updateFileProgress: function (e) {
      let vm = this
      if (e.lengthComputable) {
        vm.progressMax = e.total
        vm.progressVal = e.loaded
      }
    },
    uploadFile: function (file) {
    
      // let vm = this
      // var xhr = new XMLHttpRequest()
      // var pBar = $('#uploader_' + vm.uniqNumber + ' .file-progress')
      // var fileSizeLimit = 1024 // In MB
      // if (xhr.upload) {
      //   // Check if file is less than x MB
      //   if (file.size <= fileSizeLimit * 1024 * 1024) {
      //     // Progress bar
      //     pBar.css('display', 'inline')
      //     xhr.upload.addEventListener('loadstart', vm.setProgressMaxValue, false)
      //     xhr.upload.addEventListener('progress', vm.updateFileProgress, false)

      //     // File received / failed
      //     xhr.onreadystatechange = function (e) {
      //       if (xhr.readyState === 4) {
      //         // Everything is good!
      //         vm.localValue = (xhr.status === 200 ? JSON.parse(xhr.response) : null)

      //         // progress.className = (xhr.status == 200 ? 'success' : 'failure')
      //         // document.location.reload(true);
      //       }
      //     }

      //     var formData = new FormData()
      //     formData.append('data', file)

      //     let AUTH_TOKEN = process.env.VUE_APP_GRAPHQL_AUTH_TOKEN || 'apollo-token'
      //     let httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost'
      //     let authToken = localStorage.getItem(AUTH_TOKEN)

      //     // Start upload
      //     xhr.open('POST', httpEndpoint + '/file/uploads', true)
      //     xhr.setRequestHeader('X-File-Name', file.name)
      //     xhr.setRequestHeader('X-File-Size', file.size)
      //     xhr.setRequestHeader('Accept', 'application/json')
      //     xhr.setRequestHeader('Authorization', 'Bearer ' + authToken)

      //     xhr.send(formData)
      //   } else {
      //     vm.output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).')
      //   }
      // }
        
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      vm.ekUpload()
      vm.parseExistingFile()
    })
  }
}
</script>
 