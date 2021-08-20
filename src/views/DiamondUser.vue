<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i> <strong>Male User</strong>
              </template>
              <b-card-text>
                <div>
                  <b-table
                    small
                    :fields="maleUserFields"
                    :items="maleUserItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(username)="data">
                      <img
                        :src="data.item.userimg"
                        alt="User Image"
                        class="imageStyles"
                      />
                      <b>{{ data.item.username }}</b>
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(join)="data">
                      {{ data.item.join }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(reports)="data">
                      {{ data.item.reports }}
                    </template>
                    <template #cell(status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="banLink"
                          v-b-modal="'block-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-ban"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="warningLink"
                          v-b-modal="'warn-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-exclamation-triangle"
                            style="font-size: 16px; color: grey"
                          ></i>
                        </a>
                        <a
                          class="upgradeLink"
                          v-b-modal="'upgrade-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-usd"
                            style="font-size: 16px; color: #28a745"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <BlockUserModal :index="data.index"></BlockUserModal>
                      <WarnUserModal :index="data.index"></WarnUserModal>
                      <UpgradeUserModal :index="data.index"></UpgradeUserModal>
                      <DeleteUserModal :index="data.index"></DeleteUserModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Female User</strong>
              </template>
              <b-card-text>
                <div>
                  <b-table
                    small
                    :fields="femaleUserFields"
                    :items="femaleUserItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data" class="tableStyles">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(username)="data">
                      <img
                        :src="data.item.userimg"
                        alt="User Image"
                        class="imageStyles"
                      />
                      <b>{{ data.item.username }}</b>
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(join)="data">
                      {{ data.item.join }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(reports)="data">
                      {{ data.item.reports }}
                    </template>
                    <template #cell(status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks" style="width: 43%">
                        <a
                          class="banLink"
                          v-b-modal="'block-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-ban"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="warningLink"
                          v-b-modal="'warn-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-exclamation-triangle"
                            style="font-size: 16px; color: grey"
                          ></i>
                        </a>
                        <a
                          class="upgradeLink"
                          v-b-modal="'upgrade-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-usd"
                            style="font-size: 16px; color: #28a745"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-user-modal' + data.index + 1"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <BlockUserModal :index="data.index"></BlockUserModal>
                      <WarnUserModal :index="data.index"></WarnUserModal>
                      <UpgradeUserModal :index="data.index"></UpgradeUserModal>
                      <DeleteUserModal :index="data.index"></DeleteUserModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-ban iconStyle"></i> <strong>Block User</strong>
              </template>
              <b-card-text>
                <div>
                  <b-table
                    small
                    :fields="blockUserFields"
                    :items="blockUserItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(username)="data">
                      <img
                        :src="data.item.userimg"
                        alt="User Image"
                        class="imageStyles"
                      />
                      <b>{{ data.item.username }}</b>
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(join)="data">
                      {{ data.item.join }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(reports)="data">
                      {{ data.item.reports }}
                    </template>
                    <template #cell(status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks" style="width: 45%">
                        <a
                          class="banLink"
                          v-b-modal="'block-user-modal' + data.index + 1"
                          ><i
                            class="fa fa-ban"
                            style="font-size: 16px; color: #e9573f"
                          ></i
                        ></a>
                        <a
                          class="warningLink"
                          v-b-modal="'warn-user-modal' + data.index + 1"
                          ><i
                            class="fa fa-exclamation-triangle"
                            style="font-size: 16px; color: grey"
                          ></i
                        ></a>
                        <a
                          class="upgradeLink"
                          v-b-modal="'upgrade-user-modal' + data.index + 1"
                          ><i
                            class="fa fa-usd"
                            style="font-size: 16px; color: #28a745"
                          ></i
                        ></a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-user-modal' + data.index + 1"
                          ><i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i
                        ></a>
                      </div>
                      <BlockUserModal :index="data.index"></BlockUserModal>
                      <WarnUserModal :index="data.index"></WarnUserModal>
                      <UpgradeUserModal :index="data.index"></UpgradeUserModal>
                      <DeleteUserModal :index="data.index"></DeleteUserModal>
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
  justify-content: space-around;
  width: 42%;
}

a.warningLink {
  border: 2px solid grey;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}
a.upgradeLink {
  border: 2px solid #28a745;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}
a.deleteLink {
  border: 2px solid #367fa9;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

    
<script>
import BlockUserModal from "@/components/modals/standard-user-modals/BlockUserModal";
import WarnUserModal from "@/components/modals/standard-user-modals/WarnUserModal";
import UpgradeUserModal from "@/components/modals/standard-user-modals/UpgradeUserModal";
import DeleteUserModal from "@/components/modals/standard-user-modals/DeleteUserModal";

export default {
  components: {
    BlockUserModal,
    WarnUserModal,
    UpgradeUserModal,
    DeleteUserModal,
  },
  data() {
    return {
      maleUserFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "username", label: "User" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "join", label: "Join" },
        // A regular column
        { key: "reports", label: "Reports" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      maleUserItems: [
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Sameer",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Daham 1",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Daham 2",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
      ],
      femaleUserFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "username", label: "User" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "join", label: "Join" },
        // A regular column
        { key: "reports", label: "Reports" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      femaleUserItems: [
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Sameera",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Sameera 2",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Sameera 3",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
      ],
      blockUserFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "username", label: "User" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "join", label: "Join" },
        // A regular column
        { key: "reports", label: "Reports" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      blockUserItems: [
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Blocked User 1",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Blocked User 2",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          userimg: require("@/assets/img/DE.png"),
          username: "Blocked User 3",
          join: "categ",
          reports: "categ",
          status: "active",
          option: "buttons here",
        },
      ],
    };
  },
};
</script>