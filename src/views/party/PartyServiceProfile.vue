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
                <a href="#Delivery" data-toggle="tab">Delivery</a>
              </li>
              <li>
                <a href="#Dinners" data-toggle="tab">Dinners</a>
              </li>
              <li>
                <a href="#Reservation" data-toggle="tab">Reservation</a>
              </li>
              <li>
                <a href="#PartyService" data-toggle="tab">Party Service</a>
              </li>
              <li>
                <a href="#Reviews" data-toggle="tab">Reviews</a>
              </li>
              <li>
                <a href="#Affliate" data-toggle="tab">Affliate</a>
              </li>
              <li>
                <a href="#Settings" data-toggle="tab">Settings</a>
              </li>
            </ul>

            <!-- tab content  -->

            <div class="tab-content">
              <!-- Delivery tab menu  -->
              <div class="active tab-pane" id="Delivery">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Delivery Orders</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Dinners tab menu  -->
              <div class="tab-pane" id="Dinners">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Dinner Orders</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Reservation tab menu  -->
              <div class="tab-pane" id="Reservation">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Reservations</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Reservations ID</th>
                          <th>Shop Name</th>
                          <th>Reservations Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- party service tab menu -->
              <div class="tab-pane" id="PartyService">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Party Service</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Reviews tab menu  -->
              <div class="tab-pane" id="Reviews">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Reviews</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Review ID</th>
                          <th>Shop Name</th>
                          <th>Stars</th>
                          <th>Time and Date</th>
                          <th>Status</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Affliate tab menu  -->
              <div class="tab-pane" id="Affliate">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Affliate</h3>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <h2 style="text-align:center; font-weight: 900;">Affliate Link</h2>
                          </td>
                          <td class="earningCol" style="color: green; text-align:center;">
                            <h2 style="font-weight: 900;  position: relative;">5,99 &euro;</h2>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Username</th>
                          <th>User ID</th>
                          <th>Join Date</th>
                          <th>Amount</th>
                          <th>Earn</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Settings tab menu -->
              <div class="tab-pane" id="Settings">
                <h3 style="font-weight: 900;">Settings</h3>
                <div class="box box-success accountSuspend">
                  <h4 style="font-weight:900">Suspend the Account</h4>
                  <p>Account will be resume after a week</p>
                </div>
                <div class="box box-success accountSuspend">
                  <h4 style="font-weight:900">Suspend the Account</h4>
                  <p>Account will be resume after a week</p>
                </div>
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
  name: "PartyServiceProfile",
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
td.earningCol h2::before {
  content: "Earn:";
  position: absolute;
  top: -14px;
  left: 15px;
  font-size: 18px;
  color: #000;
}

.box.box-success.accountSuspend {
  padding: 12px;
  border-left: 3px solid #00a65a;
  border-top: 0;
}
</style>