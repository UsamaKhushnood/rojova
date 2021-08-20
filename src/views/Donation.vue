<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Manage Donation</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button
                    class="btn btn-success btn-md"
                    v-b-modal="'manage-add-organization-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Organization
                  </button>
                  <ManageAddOrganizationModal></ManageAddOrganizationModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="manageDonationFields"
                    :items="manageDonationItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(organizationName)="data">
                      {{ data.item.organizationName }}
                    </template>

                    <template #cell(totalReach)="data">
                      {{ data.item.totalReach }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="
                            'manage-edit-organization-modal' + data.index
                          "
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <ManageEditOrganizationModal
                            :index="data.index"
                          ></ManageEditOrganizationModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="
                            'delete-manage-donation-modal' + data.index
                          "
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteManageDonationModal
                            :index="data.index"
                          ></DeleteManageDonationModal>
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
                <strong>Add Organization</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button
                    class="btn btn-success btn-md"
                    v-b-modal="'add-new-donation-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add New Donation
                  </button>
                  <AddNewDonationModal></AddNewDonationModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addOrganizationFields"
                    :items="addOrganizationItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(organizationName)="data">
                      {{ data.item.organizationName }}
                    </template>

                    <template #cell(totalReach)="data">
                      {{ data.item.totalReach }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a class="editLink" v-b-modal="'edit-new-donation-modal' + data.index">
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditNewDonationModal :index="data.index"></EditNewDonationModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="
                            'delete-add-organization-modal' + data.index
                          "
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAddOrganizationModal
                            :index="data.index"
                          ></DeleteAddOrganizationModal>
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

 
</style>

    
<script>
import DeleteManageDonationModal from "@/components/modals/donation-modals/DeleteManageDonationModal";
import DeleteAddOrganizationModal from "@/components/modals/donation-modals/DeleteAddOrganizationModal";
import ManageEditOrganizationModal from "@/components/modals/donation-modals/ManageEditOrganizationModal";
import ManageAddOrganizationModal from "@/components/modals/donation-modals/ManageAddOrganizationModal";
import AddNewDonationModal from "@/components/modals/donation-modals/AddNewDonationModal";
import EditNewDonationModal from "@/components/modals/donation-modals/EditNewDonationModal";
export default {
  components: {
    DeleteManageDonationModal,
    DeleteAddOrganizationModal,
    ManageAddOrganizationModal,
    ManageEditOrganizationModal,
    AddNewDonationModal,
    EditNewDonationModal,
  },
  data() {
    return {
      manageDonationFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "organizationName", label: "Organization Name" },
        { key: "totalReach", label: "Total Reach" },
        { key: "option", label: "Option" },
      ],
      manageDonationItems: [
        {
          organizationName: "categ",
          totalReach: "categ",
        },
        {
          organizationName: "categ",
          totalReach: "categ",
        },
      ],
      addOrganizationFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "organizationName", label: "Organization Name" },
        { key: "totalReach", label: "Total Reach" },
        { key: "option", label: "Option" },
      ],
      addOrganizationItems: [
        {
          organizationName: "categ",
          totalReach: "categ",
        },
        {
          organizationName: "categ",
          totalReach: "categ",
        },
      ],
    };
  },
};
</script>