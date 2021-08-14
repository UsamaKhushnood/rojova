<template>
  <div>
    <b-modal
      :id="'edit-history-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit History"
    >
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Select Category</label>
        </b-col>
        <b-col cols="9">
          <b-form-select
            v-model="selected"
            :options="options"
            class="form-control border"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Title</label>
        </b-col>
        <b-col cols="9">
          <input type="text" class="form-control border" placeholder="Title" />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Description</label>
        </b-col>
        <b-col cols="9">
          <vue-editor></vue-editor>
        </b-col>
      </b-row>

       <b-row class="align-items-center mb-4">
          <div class="bg-red p-3">Image Upload</div>
        </b-row>
        <b-row class="align-items-center mb-4">
          <div
            class="
              myDropFileClass
              d-flex
              align-items-center
              justify-content-center
              
            "
          >
            <div class="drop-zone">
              <span class="drop-zone__prompt"
                >Drop file here or click to upload</span
              >
              <input type="file" name="myFile" class="drop-zone__input" />
            </div>
          </div>
        </b-row>
        <b-row class="align-items-center mb-4">
          <div class="bg-red p-3 mt-3">Video Upload</div>
        </b-row>
        <b-row class="align-items-center mb-4">
          <div
            class="
              myDropFileClass
              d-flex
              align-items-center
              justify-content-center
              
            "
          >
            <div class="drop-zone">
              <span class="drop-zone__prompt"
                >Drop file here or click to upload</span
              >
              <input type="file" name="myFile" class="drop-zone__input" />
            </div>
          </div>
        </b-row>

        <b-row class="align-items-center mb-4">
            <b-col cols="4">
                <label>Status</label>
            </b-col>
            <b-col cols="4">
                <b-form-radio v-model="selectedRadioButton" name="some-radios" value="Publish">Publish</b-form-radio>
            </b-col>
            <b-col cols="4">
                <b-form-radio v-model="selectedRadioButton" name="some-radios" value="UnPublish">UnPublish</b-form-radio>
            </b-col>
        </b-row>
        

      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="success" @click="ok()">
          Save and add new
        </b-button>
        <b-button size="md" variant="primary" @click="cancel()">
          Save and close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<style scoped>
.drop-zone {
  max-width: 200px;
  height: 200px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  color: #cccccc;
  border: 4px dashed #009578;
  border-radius: 10px;
}

.drop-zone--over {
  border-style: solid;
}

.drop-zone__input {
  display: none;
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  text-align: center;
}
</style>


<script>
export default {
  props: ["index"],
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      selectedRadioButton: ''
      
      // statusSelected: null,
      // statusOption: [
      //     { value: null, text: "Please select an option"},
      //     { value: "a", text: "Publish"  },
      //     { value: "b", text: "UnPublish"  }
      // ]
    };
  },
};


document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
</script>
