<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Coming Soon</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-events-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add New Event
                    <AddEventsModal></AddEventsModal>
                  </button>
                  
                </div>
                <div>
                  <b-table
                    small
                    :fields="comingSoonFields"
                    :items="comingSoonItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(title)="data">
                      {{ data.item.title }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(start)="data">
                      {{ data.item.start }}
                    </template>
                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a class="editLink"
                         v-b-modal="'edit-events-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditEventsModal :index="data.index"></EditEventsModal>
                        </a>
                        <a class="deleteLink"
                        v-b-modal="'delete-events-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteEventsModal :index="data.index"></DeleteEventsModal>
                        </a>
                      </div>
                      

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              

            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Past Events</strong>
              </template>
              <b-card-text>
                
                <div>
                  <b-table
                    small
                    :fields="pastEventsFields"
                    :items="pastEventsItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(title)="data">
                      {{ data.item.title }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(images)="data">
                      {{ data.item.images }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(videos)="data">
                      {{ data.item.videos }}
                    </template>
                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a class="editLink"
                        v-b-modal="'edit-past-events-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        <EditPastEventsModal :index="data.index"></EditPastEventsModal>
                        </a>
                        <a class="deleteLink"
                        v-b-modal="'delete-past-events-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeletePastEventsModal :index="data.index"></DeletePastEventsModal>
                        </a>
                        <a class="deleteLink"
                        v-b-modal="'add-past-events-modal' + data.index"
                        >
                          <i
                            class="fa fa-plus"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <AddPastEventsModal :index="data.index"></AddPastEventsModal>
                        </a>
                      </div>
                      

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              

            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add Category</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button
                    class="btn btn-success btn-md"
                    v-b-modal="'add-events-category-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                  <AddEventsCategoryModal></AddEventsCategoryModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addEventsCategoryFields"
                    :items="addEventsCategoryItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                        v-b-modal="'edit-events-category-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditEventsCategoryModal :index="data.index"></EditEventsCategoryModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-events-category-modal' + data.index"
                           
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteCategoryModal :index="data.index"></DeleteCategoryModal>
                        </a>
                      </div>
                    
                    </template>
                  </b-table>
                </div>
              </b-card-text>

                
              
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
  </div>
</template>
    
<style scoped>
.iconStyle {
  margin-right: 10px;
}
.imageStyles {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.badge {
  font-size: 13px;
}
.allLinks {
  display: flex;
  align-items: center;
  width: 100%;
}
a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}

a.deleteLink {
  border: 2px solid #367fa9;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}
</style>

    
<script>
import AddEventsModal from "@/components/modals/events-modals/AddEventsModal"
import EditEventsModal from "@/components/modals/events-modals/EditEventsModal"
import DeleteEventsModal from "@/components/modals/events-modals/DeleteEventsModal"
import DeletePastEventsModal from "@/components/modals/events-modals/DeletePastEventsModal"
import EditPastEventsModal from "@/components/modals/events-modals/EditPastEventsModal"
import AddPastEventsModal from "@/components/modals/events-modals/AddPastEventsModal"
import DeleteCategoryModal from "@/components/modals/events-modals/DeleteCategoryModal"
import AddEventsCategoryModal from "@/components/modals/events-modals/AddEventsCategoryModal"
import EditEventsCategoryModal from "@/components/modals/events-modals/EditEventsCategoryModal"

export default {
    components: {
    AddEventsModal,
    EditEventsModal,
    DeleteEventsModal,
    DeletePastEventsModal,
    EditPastEventsModal,
    AddPastEventsModal,
    DeleteCategoryModal,
    AddEventsCategoryModal,
    EditEventsCategoryModal,
   },
  data() {
    return {
      comingSoonFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "title", label: "Title" },
        // A regular column
        { key: "start", label: "Start" },
        { key: "tickets", label: "Tickets" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      comingSoonItems: [
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        
      ],
      pastEventsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "title", label: "Title" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "images", label: "Images" },
        // A regular column
        { key: "videos", label: "Videos" },
        { key: "tickets", label: "Tickets" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      pastEventsItems: [
        {
          title: "categ",
          images: "categ",
          videos: "categ",
          tickets: "categ"
        },
        {
          title: "categ",
          images: "categ",
          videos: "categ",
          tickets: "categ"
        },
        {
          title: "categ",
          images: "categ",
          videos: "categ",
          tickets: "categ"
        },
      ],
      addEventsCategoryFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        //
        { key: "option", label: "Option" },
      ],
      addEventsCategoryItems: [
        {
            category: 'categ'
        },
        {
            category: 'categ'
        },
        
      ],
    };
  },
};
</script>