<template>
  <div class="content-wrapper" style="margin-left: 0; padding-top:0;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>User Profile</h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> Home
          </a>
        </li>
        <li class="active">PartyService Profile</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-3">
          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <img
                class="profile-user-img img-responsive img-circle"
                src="/images/user4-128x128.jpg"
                alt="User profile picture"
              />

              <h3 class="profile-username text-center">Nina Mcintire</h3>

              <p class="text-muted text-center">Software Engineer</p>

              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>Followers</b>
                  <a class="pull-right">1,322</a>
                </li>
                <li class="list-group-item">
                  <b>Following</b>
                  <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                  <b>Friends</b>
                  <a class="pull-right">13,287</a>
                </li>
              </ul>

              <a href="#" class="btn btn-primary btn-block">
                <b>Follow</b>
              </a>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- About Me Box -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">About Me</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">

              <strong>
                <i class="fa fa-map-marker margin-r-5"></i> Location
              </strong>

              <p class="text-muted">Malibu, California</p>

              <hr />

              <strong>
                <i class="fa fa-phone margin-r-5"></i> Mobile
              </strong>

              <p> 024502454554357 </p>

              <hr />

              <strong>
                <i class="fa fa-at margin-r-5"></i> E-mail
              </strong>

              <p>email@something.com</p>

              <hr />

              <strong>
                <i class="fa fa-clipboard margin-r-5"></i> Activity
              </strong>

              <p>02.12.2020-17:50</p>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#OwnerInfo" data-toggle="tab">Owner Info</a>
              </li>
              <li>
                <a href="#Tax" data-toggle="tab">Tax</a>
              </li>
              <li>
                <a href="#Documents" data-toggle="tab">Documents</a>
              </li>
              <li>
                <a href="#Shops" data-toggle="tab">Shops</a>
              </li>
              <li>
                <a href="#Banks" data-toggle="tab">Banks</a>
              </li>
            </ul>

            <!-- tab content  -->

            <div class="tab-content">
              <!-- OwnerInfo tab menu  -->
              <div class="active tab-pane" id="OwnerInfo">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Owner Info</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Last Name</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Mobile</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Phone</th>
                          <td>Dummy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Tax tab menu  -->
              <div class="tab-pane" id="Tax">
                <div class="row">
                  <div class="col-lg-12">
                                        <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Tax</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>ST-Nr</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>UMST</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>HRB</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Documents tab menu  -->
              <div class="tab-pane" id="Documents">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Documents</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Shops tab menu  -->
              <div class="tab-pane" id="Shops">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Shop Name</h3>
                          </td>
                          <td>
                            <h3 style="text-align: right;">Shop ID</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Shop Name</th>
                          <td style="text-align: center;">Dummy</td>
                          <td rowspan="4" style="text-align: right;">
                              <img src="/images/user4-128x128.jpg">
                          </td>
                        </tr>
                        <tr>
                          <th>Shop Type</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                      </tbody>
                    </table> 
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Shop Name</h3>
                          </td>
                          <td>
                            <h3 style="text-align: right;">Shop ID</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Shop Name</th>
                          <td style="text-align: center;">Dummy</td>
                          <td rowspan="4" style="text-align: right;">
                              <img src="/images/user4-128x128.jpg" >
                          </td>
                        </tr>
                        <tr>
                          <th>Shop Type</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </div>
              </div>

              <!-- Banks tab menu -->
              <div class="tab-pane" id="Banks">
                    <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Bank</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Bank Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Owner Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>IBAN</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>BIC</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                                        <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>PayPal</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>PayPal ID</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Owner Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>
 
<script>
import DataTable from "@/components/DataTable.vue";
import BsModal from "@/components/BsModal.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "PartyServiceOwnerProfile",
  components: {
    DataTable,
    BsModal
  },
  data() {
    return {
      current: "",
      denied: "",
      onHold: ""
    };
  }
};
</script>


<style>

i:hover {
    cursor: pointer
}

.imageBox {
    text-align: center;
    padding: 10px;
}

.uploadCardPics {
    background: #f2f2f2;
    padding: 10px;
}
</style>