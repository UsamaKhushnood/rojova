<template>
    <div>
        <section id="page-content">

               
                <!--/ End header content -->

                <!-- Start body content -->
                <div class="body-content animated fadeIn ">

                  

                    <div class="row">
                        
          <div class="vd_content-section clearfix" style="min-height:90vh">
			<!-- Start double tabs -->
                            <div class="panel panel-tab panel-tab-double rounded shadow">
                                <!-- Start tabs heading -->
                                <div class="panel-heading no-padding">
                                    <ul class="nav nav-tabs">
                                        <li class="active">
                                            <a href="component-tabsaccordion.html#tab2-1" data-toggle="tab">
                                                <i class="fa fa-user"></i>
                                                <div>
                                                    <h6 class="text-strong">Comming Soon</h6>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="component-tabsaccordion.html#tab2-2" data-toggle="tab">
                                                <i class="fa fa-plus-circle"></i>
                                                <div>
                                                    <h6 class="text-strong">Past Events</h6>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="component-tabsaccordion.html#tab2-3" data-toggle="tab">
                                                <i class="fa fa-plus-circle"></i>
                                                <div>
                                                    <h6 class="text-strong">Add Category</h6>
                                                </div>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div><!-- /.panel-heading -->
                                <!--/ End tabs heading -->

                                <!-- Start tabs content -->
                                <div class="panel-body">
                                    <div class="tab-content">
                                        <div class="tab-pane fade in active" id="tab2-1">
                        <div class="col-md-4"></div>
				<div class="col-md-4">
						<button type="button" class="btn btn-primary col-xs-12 btn-lg" data-toggle="modal" data-target="#addHistory">
                            <span class="append-icon"><i class="fa fa-plus-square"></i></span>&nbsp;Add New Event</button>
				</div>
               
                    <div class="col-md-4"></div>                    
				<div class="col-md-12" style="padding-top:30px">
                    
                    
					<table class="table table-striped table-primary">
						
						<thead>
							<tr>
								<th>#</th>
								<th>Category</th>
								<th>Title</th>
                                <th>Start</th>
                                <th>Tickets</th>
                                <th>Option</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1024</b>
                                </td> 
								<td>1345</td> 
								<td>categ</td> 
								<td>categ</td> 
								<td>categ</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#EditMedia" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1074</b>
                                </td>
								<td>subcategory</td> 
								<td>subcategory</td> 
								<td>subcategory</td> 
								<td>subcategory</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#EditMedia" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div><!-- col-md-12 end -->    
                                        </div>
                <div class="tab-pane fade" id="tab2-2">
               
                    <div class="col-md-12" style="padding-top:30px">
                    <table class="table table-striped table-primary">
						
						<thead>
							<tr>
								<th>Title</th>
								<th>Images</th>
								<th>Videos</th>
								<th>Tickets</th>
								<th>Option</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1024</b>
                                </td>                               
								<td>543</td> 
								<td>543</td> 
								<td>543</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#editcat" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
                                        <a data-toggle="modal" data-target="#addLang" class="btn btn-xs btn-default"><i class="fa fa-plus-square" data-original-title="Add" data-toggle="tooltip" data-placement="top"></i></a>

                                    </div>
								</td>
							</tr>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1074</b>
                                </td> 
								<td>total</td> 
								<td>total</td> 
								<td>total</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#editcat" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
									                                        <a data-toggle="modal" data-target="#addLang" class="btn btn-xs btn-default"><i class="fa fa-plus-square" data-original-title="Add" data-toggle="tooltip" data-placement="top"></i></a>
                                    </div>
								</td>
							</tr>
						</tbody>
					</table>
                    </div>
                </div>
                                        <div class="tab-pane fade in " id="tab2-3">
                        <div class="col-md-4"></div>
				<div class="col-md-4">
						<button type="button" class="btn btn-primary col-xs-12 btn-lg" data-toggle="modal" data-target="#addDonation">
                            <span class="append-icon"><i class="fa fa-plus-square"></i></span>&nbsp;Add Event Category</button>
				</div>
               
                    <div class="col-md-4"></div>                    
				<div class="col-md-12" style="padding-top:30px">
                    
                    
					<table class="table table-striped table-primary">
						
						<thead>
							<tr>
								<th>#</th>
								<th>Category</th>
                                <th>Option</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1024</b>
                                </td> 
								<td>categ</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#EditDonation" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-center" style="width: 7%;">
                                    <b>1074</b>
                                </td> 
								<td>subcategory</td> 
								<td class="menu-action">
									<div class="pdng5">
										<a data-toggle="modal" data-target="#EditDonation" class="btn btn-xs btn-default"><i class="fa fa-pencil" data-original-title="Edit" data-toggle="tooltip" data-placement="top"></i></a>
										<a data-toggle="modal" data-target="#removeLang" class="btn btn-xs btn-default"><i class="fa fa-trash-o" data-original-title="Remove" data-toggle="tooltip" data-placement="top"></i></a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div><!-- col-md-12 end -->    
                                        </div>
                                       
                                    </div>
                                </div><!-- /.panel-body -->
                                <!--/ End tabs content -->
                            </div><!-- /.panel -->

                        </div>
                    </div>

                </div><!-- /.body-content -->
                <!--/ End body content -->
                    

               
                <!--/ End body content -->
                <!-- ADD LANG -->
                 <!--modal-->
                    <div class="modal modal-success " role="dialog" id="addHistory">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 class="modal-title">Add Event</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                        <div class="col-md-12">

                            <!-- Start basic wizard horizontal -->
                            <div id="basic-wizard-horizontal">
                                <div class="panel panel-tab rounded shadow">
                                    <!-- Start tabs heading -->
                                    <div class="panel-heading no-padding">
                                        <ul class="nav nav-tabs nav-pills">
                                            <li class="active">
                                                <a href="form-wizard.html#tab1-1" data-toggle="tab">
                                                    <div>
                                                        <span class="text-strong">About Event</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="form-wizard.html#tab1-2" data-toggle="tab">
                                                    <div>
                                                        <span class="text-strong">Location</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="form-wizard.html#tab1-3" data-toggle="tab">
                                                    <div>
                                                        <span class="text-strong"> Promoter</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="form-wizard.html#tab1-4" data-toggle="tab">
                                                    <div>
                                                        <span class="text-strong">Ticket</span>
                                                </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div><!-- /.panel-heading -->
                                    <!--/ End tabs heading -->

                                    <!-- Start tabs content -->
                                    <div class="panel-body">
                                        <form action="form-wizard.html#" class="tab-content form-horizontal">
                                            <div class="tab-pane fade in active inner-all" id="tab1-1">
                                                 <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Title</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Title">

                                                        </div>

                                                  </div> 
                                                 <br>
                                            <div class="input-group col-xs-12">
                                              <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Desc.</label>
                                                
                                          </div>
                                                <br>
                                                 <div class="form-group">
                                                    <label class="col-md-3 control-label">Event Image:</label>
                                                    <div class="col-md-9">
                                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                                            <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"></div>
                                                            <div>
                                                                <span class="btn btn-info btn-file"><span class="fileinput-new">Select Image</span><span class="fileinput-exists">Change</span>
                                                                <input type="hidden" value="" name="...">
                                                                <input type="file" name=""></span>
                                                                <a href="#form-element.html" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">Remove</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">upload Sound :</label>
                                                <div class="col-md-9">
                                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                                        <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 50px; line-height: 150px;"></div>
                                                        <div>
                                                            <span class="btn btn-info btn-file"><span class="fileinput-new">Select </span><span class="fileinput-exists">Change</span><input type="hidden" value="" name="..."><input type="file" multiple="" name=""></span>
                                                            <a href="form-element.html#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">Remove</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div class="panel-footer">
                                        <ul class="pager wizard no-margin">
                                            <li class="previous disabled"><a href="javascript:void(0);">Previous</a></li>
                                            <li class="next"><a href="javascript:void(0);">Next</a></li>
                                        </ul>
                                    </div><!-- /.panel-footer -->
                                            </div>
                                            <div class="tab-pane fade inner-all" id="tab1-2">
                                               <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Country</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Country">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Zip Code</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Zip Code">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Address</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Address">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="panel-footer">
                                        <ul class="pager wizard no-margin">
                                            <li class="previous disabled"><a href="javascript:void(0);">Previous</a></li>
                                            <li class="next"><a href="javascript:void(0);">Next</a></li>
                                        </ul>
                                    </div><!-- /.panel-footer -->
                                            </div>
                                            <div class="tab-pane fade inner-all" id="tab1-3">
                                              <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">First Name</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="First Name">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Last Name</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Last Name">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Email</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Email">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Phone Number</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Phone Number">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Rojava Name</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Rojava Name">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Rojava ID</label>
                                                        <div class="col-sm-9 controls">
                                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Rojava ID">

                                                        </div>

                                                  </div> 
                                                 <br>
                                                <div class="panel-footer">
                                        <ul class="pager wizard no-margin">
                                            <li class="previous disabled"><a href="javascript:void(0);">Previous</a></li>
                                            <li class="next"><a href="javascript:void(0);">Next</a></li>
                                        </ul>
                                    </div><!-- /.panel-footer -->
                                            </div>
                                            <div class="tab-pane fade inner-all" id="tab1-4">
                                               <div class="input-group col-xs-12">
                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Ticket Sale</label>
                                        <div class="col-sm-9 controls">
                                             <select class="langSelect col-xs-12 " style="display: none;">
                                            <option selected="">Choose Ticket Sale</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select><div class="chosen-container chosen-container-single" style="width: 0px;" title=""><a class="chosen-single" tabindex="-1"><span>Choose Ticket Sale</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off"></div><ul class="chosen-results"></ul></div></div>      
                                        </div>
                                  </div> 
                                                <br>
                                                <div class="input-group col-xs-12">
                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Online Sale</label>
                                        <div class="col-sm-9 controls">
                                             <select class="langSelect col-xs-12 " style="display: none;">
                                            <option selected="">Choose Onlline Sale</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select><div class="chosen-container chosen-container-single" style="width: 0px;" title=""><a class="chosen-single" tabindex="-1"><span>Choose Onlline Sale</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off"></div><ul class="chosen-results"></ul></div></div>      
                                        </div>
                                  </div> 
                                                <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Men Price</label>
                                                        <div class="col-sm-4 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Men Price">

                                                        </div>
                                                     <div class="col-sm-5 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Notification">

                                                        </div>
                                                  </div> 
                                                <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Women Price</label>
                                                        <div class="col-sm-4 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Women Price">

                                                        </div>
                                                     <div class="col-sm-5 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Notification">

                                                        </div>
                                                  </div> 
                                                <br>
                                                <div class="input-group col-xs-12">
                                                      <label class="col-sm-3 control-label" style="font-size:15px;padding-top:10px">Kids</label>
                                                        <div class="col-sm-4 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Kids">

                                                        </div>
                                                    <div class="col-sm-5 controls">
                                                         <input id="title" type="email" class="form-control col-xs-12" name="title" placeholder="Notification">

                                                        </div>

                                                  </div> 
                                                <br>
                                                <div class="panel-footer">
                                        <ul class="pager wizard no-margin">
                                            <li class="previous disabled"><a href="javascript:void(0);">Previous</a></li>
                                        </ul>
                                    </div><!-- /.panel-footer -->
                                                 <div class="" style="float:right; padding-top:10px">
                                    <button type="button" class="btn btn-success" data-dismiss="modal">Save and add new</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Save and close</button>
                                </div>
                                            </div>
                                        </form>
                                    </div><!-- /.panel-body -->
                                    <!--/ End tabs content -->

                                    <!-- Start pager -->
                                    
                                    <!--/ End pager -->

                                </div><!-- /.panel -->
                            </div><!-- /#basic-wizard-horizontal -->
                            <!--/ End basic wizard horizontal-->

                        </div>
                    </div><!-- /.row -->
                                   
                                </div>
                               
                            </div>
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    <!-- /.modal -->
                
                
                 
                 <!--modal-->
                    
                    
                  <div class="modal modal-success " role="dialog" id="addDonation">
                        <div class="modal-dialog modal-md">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 class="modal-title">Add Category</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                            <div class="input-group col-xs-12">
                                      <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Category Name</label>
                                        <div class="col-sm-7 controls">
                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Category Name">

                                        </div>
                                  </div> 
                                </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-dismiss="modal">Save and add new</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Save and close</button>
                                </div>
                            </div>
                        </div>
                        <!-- /.modal-dialog -->
                    </div><!-- /.modal -->
                <div class="modal modal-success " role="dialog" id="EditDonation">
                        <div class="modal-dialog modal-md">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 class="modal-title">Edit Category</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                            <div class="input-group col-xs-12">
                                      <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Category Name</label>
                                        <div class="col-sm-7 controls">
                                         <input id="title" type="text" class="form-control col-xs-12" name="title" placeholder="Category Name">

                                        </div>
                                  </div> 
                                </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-dismiss="modal">Save and add new</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Save and close</button>
                                </div>
                            </div>
                        </div>
                        <!-- /.modal-dialog -->
                    </div><!-- /.modal -->
<div class="modal fade modal-primary" id="addLang" tabindex="-1" role="dialog" aria-labelledby="Add maincategory" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Add Category</h4>
        </div>
      <div class="modal-body" id="input-mask">
        <form method="post">
            <div class="row" style="display:none">
                        <div class="col-md-12">

                            <!-- Start dropzone js -->
                            <div class="panel panel-danger rounded shadow">
                                <div class="panel-body">
                                    
                                        <div class="fallback">
                                            <input name="file" type="file" multiple="">
                                        </div>
                                    
                                </div><!-- /.panel-body -->
                            </div><!-- /.panel -->
                            <!--/ End dropzone js -->

                        </div>
                    </div></form><!-- /.row -->
            <div class="row">
                 <div class="col-md-12">

                            <!-- Start dropzone js -->
                            <div class="panel panel-danger rounded shadow">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h3 class="panel-title">Images Upload</h3>
                                    </div>
                                   
                                    <div class="clearfix"></div>
                                </div><!-- /.panel-heading -->
                                
                                <div class="panel-body">

                                    <form id="my-dropzone" action="../assets/admin/data/index.html" class="dropzone dz-clickable">
                                        
                                    <div class="dz-default dz-message"><span>Drop files here to upload</span></div></form>

                                </div><!-- /.panel-body -->
                            </div><!-- /.panel -->
                            <!--/ End dropzone js -->

                        </div>
                 <div class="col-md-12">

                            <!-- Start dropzone js -->
                            <div class="panel panel-danger rounded shadow">
                                <div class="panel-heading">
                                    <div class="pull-left">
                                        <h3 class="panel-title">Video Upload</h3>
                                    </div>
                                   
                                    <div class="clearfix"></div>
                                </div><!-- /.panel-heading -->
                                <div class="panel-body">

                                    <form id="my-dropzone" action="../assets/admin/data/index.html" class="dropzone dz-clickable">
                                        
                                    <div class="dz-default dz-message"><span>Drop files here to upload</span></div></form>

                                </div><!-- /.panel-body -->
                            </div><!-- /.panel -->
                            <!--/ End dropzone js -->

                        </div>
		
            </div>
		
      </div>	  
      <div class="modal-footer vd_bg-white">		  
        <button type="button" class="btn btn-primary " data-dismiss="modal">Save and add new</button>
        <button type="button" class="btn btn-primary " data-dismiss="modal">Save and close</button>
      </div>
    </div>
  </div>
</div>
<!--                edit category-->
           
           <div class="modal fade modal-primary" id="editcat" tabindex="-1" role="dialog" aria-labelledby="Add maincategory" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Edit Category</h4>
        </div>
      <div class="modal-body" id="input-mask">
        <form method="post">
            <div class="row">
		   <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Organization Name</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="Organization Name ">
				</div>
		  </div>
            <br>
            <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Bank Account</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="Bank Account">
				</div>
		  </div>
            <br>
            <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Paypal Account</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="Paypal Account">

				</div>
		  </div>
            <br>
            <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Address</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="Address ">

				</div>
		  </div>
            <br>
            <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">City</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="City">

				</div>
		  </div>
            <br>
            <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">Phone</label>
				<div class="col-sm-7 controls">
				 <input id="" type="title" class="form-control col-xs-12" name="categ" placeholder="Phone Number">

				</div>
		  </div>
            <br>
            <div class="form-group">
            <label class="col-md-4 control-label">upload Logo:</label>
            <div class="col-md-8">
                <div class="fileinput fileinput-new" data-provides="fileinput">
                    <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px; line-height: 150px;"></div>
                    <div>
                        <span class="btn btn-info btn-file"><span class="fileinput-new">Select Image</span><span class="fileinput-exists">Change</span><input type="hidden" value="" name="..."><input type="file" name=""></span>
                        <a href="form-element.html#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">Remove</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
		</form>
      </div>	  
      <div class="modal-footer vd_bg-white">		  
        <button type="button" class="btn btn-primary " data-dismiss="modal">Save and add new</button>
        <button type="button" class="btn btn-primary " data-dismiss="modal">Save and close</button>
      </div>
    </div>
  </div>
</div>
<!-- EDIT LANG -->
<div class="modal right fade modal-success" id="viewItem" tabindex="-1" role="dialog" aria-labelledby="Add maincategory" aria-hidden="true" style="z-index: 1049;">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
     <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">View Items</h4>
    </div>
      <div class="modal-body ">		  
			<div class="row">
				<div class="col-md-12">
                    
               
                    
                        
             <div class="input-group col-xs-12" style="font-size:15px;">
              <label class="col-sm-4 control-label">Title</label>
				<div class="col-sm-7 controls">
                    <p>title</p>
				</div>
		    
		  </div>
            <div class="input-group col-xs-12" style="font-size:15px;">
              <label class="col-sm-4 control-label">Url</label>
				<div class="col-sm-7 controls">
                    <p>www.example.com</p>
				</div>
		    
		  </div>
            <div class="input-group col-xs-12" style="font-size:15px;">
              <label class="col-sm-4 control-label">Banner</label>
				<div class="col-sm-7 controls">
                    <img src="img/BILLY-ARGEL-GINGA.jpg" width="100%" height="200px">
				</div>
		    
		  </div>  
					
				</div><!-- col-md-12 end --> 
			</div><!-- row end -->
      </div>	  
     <div class="modal-footer">
         
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
    </div>
  </div>
</div>
<!-- REMOVE LANG -->
<div class="modal fade modal-danger" id="removeLang" tabindex="-1" role="dialog" aria-labelledby="Add maincategory" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header vd_bg-red">
        <button type="button" class="close vd_white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title vd_white">REMOVE</h4>
      </div>
      <div class="modal-body">
          <p>Are you sure you want to remove this</p>
      </div>	  
      <div class="modal-footer vd_bg-white">		  
        <button type="button" class="btn btn-primary " data-dismiss="modal">CONFIRM</button>
      </div>
    </div>
  </div>
</div>
                <!-- Start footer content -->
                <footer class="footer-content">
                    2014 - <span id="copyright-year">2021</span>© SmartSystems . Created by <a href="" target="_blank">SmartDesign</a>
                    <span class="pull-right">0.01 GB(0%) of 15 GB used</span>
                </footer><!-- /.footer-content -->
                <!--/ End footer content -->

            </section>
    </div>
</template>