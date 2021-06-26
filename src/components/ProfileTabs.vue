<template>
<div class="">
  
  <div  class="nav-tabs-custom">
    <ul  class="nav nav-tabs">
        <li class="active"><a  href="#company" data-toggle="tab" aria-expanded="true">About Company</a></li>
        <li class=""><a  href="#owner" data-toggle="tab" aria-expanded="false">About Owner</a></li>
        <li class=""><a href="#documents" data-toggle="tab" aria-expanded="false">Documents</a></li>
    </ul>
    <div  class="tab-content">
        <div  id="company" class="tab-pane active">
            <table >
                <tr >
                    <th colspan="3">
                        <h3 >Company Information</h3>
                    </th>
                </tr>
                <tr>
                    <td ><strong >Company Name</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.shop_name}}</td>
                </tr>
                <tr >
                    <td ><strong >Zipcode</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.zipcode.zipcode}} - {{details.zipcode.info.name}}</td>
                </tr>
                <tr >
                    <td ><strong >Address</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.address}}</td>
                </tr>
                <tr >
                    <td ><strong >ST-Nr.</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.shop_st_nr}}</td>
                </tr>
                <tr >
                    <td ><strong >UMST- ID</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.shop_umst_id}}</td>
                </tr>
                <tr >
                    <td ><strong >HRB Nummer</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.hrb_no}}</td>
                </tr>
            </table>
        </div>
        <div id="owner" class="tab-pane">
            <table >
                <tr >
                    <th colspan="3">
                        <h3 >Owner Information</h3>
                    </th>
                </tr>
                <tr >
                    <td ><strong >Your Name</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.first_name}} {{details.owner.last_name}}</td>
                </tr>
                <tr >
                    <td ><strong >Gender</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.gender}}</td>
                </tr>
                <tr >
                    <td ><strong >Private Email</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.private_email}}</td>
                </tr>
                <tr >
                    <td ><strong >Mobile</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.mobile}}</td>
                </tr>
                <tr >
                    <td ><strong >Zipcode</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.zipcode.zipcode}} - {{details.owner.zipcode.info.name}}</td>
                </tr>
                <tr >
                    <td ><strong >Address</strong></td>
                    <td ><b >:</b></td>
                    <td >{{details.owner.owner_address}}</td>
                </tr>
                
                
               
            </table>
        </div>
        <div id="documents" class="tab-pane">
            <table class="document_table">
                <!-- <tr >
                    <th colspan="3">
                        <h3>Documents</h3>
                    </th>
                </tr> -->
                <!-- <tr >
                    <td >
                        <div class="box box-primary">
                            <div class="box-body box-profile">
                                <div class="row">
                                    <div class="col-md-12">
                                      <a href="#newpdf" >
                                        <span class="mailbox-attachment-icon">
                                          <i  class="fa fa-file-pdf-o"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a href="#newpdf" data-toggle="modal" data-target="#newpdf" class="mailbox-attachment-name">
                                            <i class="fa fa-paperclip"></i> Sep2014-report.pdf</a>
                                            <span class="mailbox-attachment-size">
                                            1,245 KB
                                            <a href="#" class="btn btn-default btn-xs pull-right">
                                              <i class="fa fa-cloud-download"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td >
                        <div class="box box-primary">
                            <div class="box-body box-profile">
                                <div class="row">
                                    <div class="col-md-12">
                                      <a  href="#newpdf" data-toggle="modal" data-target="#newpdf">
                                        <span class="mailbox-attachment-icon">
                                          <i class="fa fa-file-word-o"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div data-v-eb82546e="" class="col-md-12">
                                        <div data-v-eb82546e="" class="mailbox-attachment-info"><a data-v-eb82546e="" href="#newpdf" data-toggle="modal" data-target="#newpdf" class="mailbox-attachment-name"><i data-v-eb82546e="" class="fa fa-paperclip"></i> App Description.docx</a><span data-v-eb82546e="" class="mailbox-attachment-size">
                                            1,245 KB
                                            <a data-v-eb82546e="" href="#" class="btn btn-default btn-xs pull-right"><i data-v-eb82546e="" class="fa fa-cloud-download"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr> -->
                <tr>
                    <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.id_card_front" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href="" data-toggle="modal" data-target="#newpdf" class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Id Card Front</a>
                                            <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.id_card_front)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.id_card_front,'IdCardFront.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.id_card_back" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Id Card Back</a>
                                            <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.id_card_back)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.id_card_back,'IdCardBack.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>

                </tr>
              <tr>
                    <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.licenz" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Licenz</a>
                                           <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.licenz)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.licenz,'Licenz.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.bankcard_front" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Bankcard Front</a>
                                            <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.bankcard_front)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.bankcard_front,'BankCardFront.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                   
                    <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.bankcard_back" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Bankcard Back</a>
                                           <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.bankcard_back)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.bankcard_back,'BankCardBack.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                     <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.menu_front" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Menucard Front</a>
                                           <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.menu_front)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.menu_front,'MenucardFront.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                     <td >
                        <div  class="box box-primary">
                            <div  class="box-body box-profile">
                                <div  class="row">
                                    <div  class="col-md-12">
                                      <a  href="#newpdf" >
                                      <span class="mailbox-attachment-icon has-img">
                                        <img  :src="details.docs.menu_back" alt="Attachment">
                                      </span>
                                      </a>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mailbox-attachment-info">
                                          <a  href=""  class="mailbox-attachment-name">
                                            <i class="fa fa-camera"></i> Menucard Back</a>
                                            <span class="mailbox-attachment-size">
                                                <!-- 2.67 MB -->.
                                                <a  
                                                @click.prevent="showLargeImage(details.docs.menu_back)"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-eye"></i>
                                                </a>&nbsp;
                                                <a
                                                style="margin-right:5px;"  
                                               @click.prevent="downloadItem(details.docs.menu_back,'MenucardBack.png')"
                                                 class="btn btn-default btn-xs pull-right">
                                                    <i class="fa fa-cloud-download"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div role="document" class="modal-dialog modal-lg singleItemPopup">
                <div class="modal-content ">
                    <div class="modal-body ">
                        <div  class="box box-primary">
                            <div class="box-body box-profile">
                                <div class="row">
                                    <div  class="col-md-12"><img src="http://127.0.0.1:8000/images/shop/doc/jQMLWzTvMY.jpeg" alt="User profile picture"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="photo2eModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div  role="document" class="modal-dialog modal-lg singleItemPopup">
                <div class="modal-content">
                    <div  class="modal-body ">
                        <img  :src="selectedLargeImage" alt="Enlarge Preview" style="width:75.5%;height:90%;">
                    </div>
                </div>
            </div>
        </div>
        <div id="iframeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div  role="document" class="modal-dialog modal-lg singleItemPopup">
                <div class="modal-content">
                    <div  class="modal-body ">
                        <iframe :src="selectedLargeImage" height="500" width="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-eb82546e="" id="photo1eModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div data-v-eb82546e="" role="document" class="modal-dialog modal-lg singleItemPopup">
                <div data-v-eb82546e="" class="modal-content ">
                    <div data-v-eb82546e="" class="modal-body "><img data-v-eb82546e="" src="/img/photo1.15845158.png" alt="User profile picture"></div>
                </div>
            </div>
        </div>
        <div data-v-eb82546e="" id="wordmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div data-v-eb82546e="" role="document" class="modal-dialog modal-lg singleItemPopup">
                <div data-v-eb82546e="" class="modal-content ">
                    <div data-v-eb82546e="" class="modal-body "><img data-v-eb82546e="" src="/img/mydoc.d279b873.png" alt="User profile picture"></div>
                </div>
            </div>
        </div>
        <div data-v-eb82546e="" id="newpdf" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade bd-example-modal-lg ">
            <div data-v-eb82546e="" role="document" class=" singleItemPopup">
                <div data-v-eb82546e="" class="modal-content ">
                    <div data-v-eb82546e="" class="modal-content">
                        <div data-v-eb82546e="" class="modal-header" style="background-color: white;">
                            <a data-v-eb82546e="" href="#" class="btn btn-sm btn-info DataTable__Action--Button" style="margin: 3px;">
                            Send Mail
                            </a>
                            <a data-v-eb82546e="" href="#" class="btn btn-sm btn-primary DataTable__Action--Button" style="margin: 3px;">
                                Print
                                <div data-v-eb82546e="" class="ripple-container"></div>
                            </a>
                        </div>
                        <div data-v-eb82546e="" class="modal-body">
                            <div data-v-eb82546e="" size="A4" layout="portrait">
                                <div data-v-eb82546e="" align="center" class="header"><img data-v-eb82546e="" width="200" height="50" src="/img/logo.3b4a18d7.png"></div>
                                <div data-v-eb82546e="" class="page-heading">
                                    <h3 data-v-eb82546e="" style="text-align: center; padding-top: 30px;">Invoice to User</h3>
                                </div>
                                <div data-v-eb82546e="" class="first-content">
                                    <table data-v-eb82546e="" width="100%" class="Invoice__To">
                                        <tbody data-v-eb82546e="">
                                            <tr data-v-eb82546e="">
                                                <td data-v-eb82546e="" align="left">
                                                    <div data-v-eb82546e="" class="identity">
                                                        <p data-v-eb82546e="" align="left">
                                                            Shop Name <br data-v-eb82546e=""> Username / Lastname <br data-v-eb82546e=""> Shop Address &nbsp; Houseno. <br data-v-eb82546e=""><br data-v-eb82546e=""> City - Zipcode
                                                        </p>
                                                    </div>
                                                </td>
                                                <td data-v-eb82546e="" align="right">
                                                    <div data-v-eb82546e="" align="right" class="status">
                                                        <table data-v-eb82546e="" width="50%" class="status_table" style="margin-top: 10px; border-spacing: 0px 5px;">
                                                            <tbody data-v-eb82546e="">
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Company</th>
                                                                    <td data-v-eb82546e="" align="right">Shop Name</td>
                                                                </tr>
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Company ID</th>
                                                                    <td data-v-eb82546e="" align="right">De-10001</td>
                                                                </tr>
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Invoice No.</th>
                                                                    <td data-v-eb82546e="" align="right">Yami-10001</td>
                                                                </tr>
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Date - Time</th>
                                                                    <td data-v-eb82546e="" align="right">31.11.2017 – 00:00</td>
                                                                </tr>
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Invoice For</th>
                                                                    <td data-v-eb82546e="" align="right" style="font-weight: bold;">Assignments</td>
                                                                </tr>
                                                                <tr data-v-eb82546e="" style="outline: rgb(242, 242, 242) solid 1px;">
                                                                    <th data-v-eb82546e="" align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Status</th>
                                                                    <td data-v-eb82546e="" align="right" style="font-weight: bold;">Paid</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <br data-v-eb82546e="">
                                <div data-v-eb82546e="" id="main-content">
                                    <h3 data-v-eb82546e="" class="text-left">Assignment Payment Invoice 17.07.2017</h3>
                                    <table data-v-eb82546e="" width="100%" border="1" class="main Invoice__ItemTable">
                                        <tbody data-v-eb82546e="">
                                            <tr data-v-eb82546e="">
                                                <th data-v-eb82546e="">#</th>
                                                <th data-v-eb82546e="">Job ID</th>
                                                <th data-v-eb82546e="">Assignment Title</th>
                                                <th data-v-eb82546e="">Budget</th>
                                                <th data-v-eb82546e="">Paid To</th>
                                            </tr>
                                            <tr data-v-eb82546e="">
                                                <td data-v-eb82546e="">01</td>
                                                <td data-v-eb82546e="">AS-10002</td>
                                                <td data-v-eb82546e="">Create Logo</td>
                                                <td data-v-eb82546e="">2.000,00 €</td>
                                                <td data-v-eb82546e="">Milestone</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div data-v-eb82546e="" class="right-table">
                                    <hr data-v-eb82546e="" align="right" style="width: 39.5%;">
                                    <table data-v-eb82546e="" width="40%" border="0" align="right" cellspacing="0" class="sub-total Invoice__SummeryTable">
                                        <tbody data-v-eb82546e="">
                                            <tr data-v-eb82546e="" class="border_bottom">
                                                <td data-v-eb82546e="" style="font-weight: bold;">Sub Total</td>
                                                <td data-v-eb82546e="" align="right" style="font-weight: bold;">2.000,00 €</td>
                                            </tr>
                                            <tr data-v-eb82546e="" style="background-color: rgb(242, 242, 242);">
                                                <td data-v-eb82546e="" style="border-top: 2px solid rgb(217, 217, 217);">+ 19 %</td>
                                                <td data-v-eb82546e="" align="right" style="border-top: 2px solid rgb(217, 217, 217);">380,00 €</td>
                                            </tr>
                                            <tr data-v-eb82546e="" class="border_bottom">
                                                <td data-v-eb82546e="" style="font-weight: bold; font-size: large;">Total</td>
                                                <td data-v-eb82546e="" align="right" style="font-weight: bold; font-size: large;">2.000,00 €</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <br data-v-eb82546e="">
                                <div data-v-eb82546e="" class="bottom-table Invoice__BottomTable">
                                    <table data-v-eb82546e="" width="100%" border="1">
                                        <tbody data-v-eb82546e="">
                                            <tr data-v-eb82546e="">
                                                <th data-v-eb82546e="">Notifications</th>
                                            </tr>
                                            <tr data-v-eb82546e="">
                                                <td data-v-eb82546e="">Payment can´t be Released without your Permission</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-eb82546e="" id="timeline" class="tab-pane">
            <table data-v-eb82546e="" id="example1" class="table table-bordered table-striped">
                <thead data-v-eb82546e="">
                    <tr data-v-eb82546e="">
                        <th data-v-eb82546e="">Zip Code</th>
                        <th data-v-eb82546e="">Delivery Cost</th>
                        <th data-v-eb82546e="">Cart Balance</th>
                        <th data-v-eb82546e="">Delivery Fee</th>
                        <th data-v-eb82546e="" style="width: 12%;">Options</th>
                    </tr>
                </thead>
                <tbody data-v-eb82546e="">
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                    <tr data-v-eb82546e="">
                        <td data-v-eb82546e="">30159 bult</td>
                        <td data-v-eb82546e="">1,50 €</td>
                        <td data-v-eb82546e="">15,00 €</td>
                        <td data-v-eb82546e="">35,00 €</td>
                        <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-edit"></i></a><a data-v-eb82546e="" href="#" class="btn btn-danger"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div data-v-eb82546e="" id="reviews" class="tab-pane">
            <div data-v-eb82546e="" class="row">
                <div data-v-eb82546e="" class="col-md-4 col-sm-6 col-xs-12">
                    <div data-v-eb82546e="" class="info-box" style="background: rgb(236, 240, 245);">
                        <span data-v-eb82546e="" class="info-box-icon bg-aqua"><i data-v-eb82546e="" class="fa fa-comments"></i></span>
                        <div data-v-eb82546e="" class="info-box-content"><span data-v-eb82546e="" class="info-box-text">Current Reviews</span><span data-v-eb82546e="" class="info-box-number">1,410</span></div>
                    </div>
                </div>
                <div data-v-eb82546e="" class="col-md-4 col-sm-6 col-xs-12">
                    <div data-v-eb82546e="" class="info-box" style="background: rgb(236, 240, 245);">
                        <span data-v-eb82546e="" class="info-box-icon bg-green"><i data-v-eb82546e="" class="fa fa-eye"></i></span>
                        <div data-v-eb82546e="" class="info-box-content"><span data-v-eb82546e="" class="info-box-text">Seen Reviews</span><span data-v-eb82546e="" class="info-box-number">410</span></div>
                    </div>
                </div>
                <div data-v-eb82546e="" class="col-md-4 col-sm-6 col-xs-12">
                    <div data-v-eb82546e="" class="info-box" style="background: rgb(236, 240, 245);">
                        <span data-v-eb82546e="" class="info-box-icon bg-yellow"><i data-v-eb82546e="" class="fa fa-eye-slash"></i></span>
                        <div data-v-eb82546e="" class="info-box-content"><span data-v-eb82546e="" class="info-box-text">Unseen Reviews</span><span data-v-eb82546e="" class="info-box-number">93,139</span></div>
                    </div>
                </div>
            </div>
            <div data-v-eb82546e="" class="row">
                <div data-v-eb82546e="" class="col-md-12">
                    <div data-v-eb82546e="" class="nav-tabs-custom">
                        <ul data-v-eb82546e="" class="nav nav-tabs">
                            <li data-v-eb82546e="" class="active"><a data-v-eb82546e="" href="#tab_1" data-toggle="tab"><b data-v-eb82546e="">Current Reviews</b></a></li>
                            <li data-v-eb82546e=""><a data-v-eb82546e="" href="#tab_2" data-toggle="tab"><b data-v-eb82546e="">Seen Reviews</b></a></li>
                            <li data-v-eb82546e=""><a data-v-eb82546e="" href="#tab_4" data-toggle="tab"><b data-v-eb82546e="">UnSeen Reviews</b></a></li>
                        </ul>
                        <div data-v-eb82546e="" class="tab-content">
                            <div data-v-eb82546e="" id="tab_1" class="tab-pane active">
                                <table data-v-eb82546e="" id="example1" class="table table-bordered table-striped">
                                    <thead data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <th data-v-eb82546e="">Review ID</th>
                                            <th data-v-eb82546e="">Shop</th>
                                            <th data-v-eb82546e="">User Name</th>
                                            <th data-v-eb82546e="">Reviews</th>
                                            <th data-v-eb82546e="">Avaerage Rating</th>
                                            <th data-v-eb82546e="">Date / Time</th>
                                            <th data-v-eb82546e="">Status</th>
                                            <th data-v-eb82546e="" style="width: 12%;">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div data-v-eb82546e="" id="tab_2" class="tab-pane">
                                <table data-v-eb82546e="" id="example1" class="table table-bordered table-striped">
                                    <thead data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <th data-v-eb82546e="">Review ID</th>
                                            <th data-v-eb82546e="">Shop</th>
                                            <th data-v-eb82546e="">User Name</th>
                                            <th data-v-eb82546e="">Reviews</th>
                                            <th data-v-eb82546e="">Avaerage Rating</th>
                                            <th data-v-eb82546e="">Date / Time</th>
                                            <th data-v-eb82546e="">Status</th>
                                            <th data-v-eb82546e="" style="width: 12%;">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-success">Seen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div data-v-eb82546e="" id="tab_4" class="tab-pane">
                                <table data-v-eb82546e="" id="example1" class="table table-bordered table-striped">
                                    <thead data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <th data-v-eb82546e="">Review ID</th>
                                            <th data-v-eb82546e="">Shop</th>
                                            <th data-v-eb82546e="">User Name</th>
                                            <th data-v-eb82546e="">Reviews</th>
                                            <th data-v-eb82546e="">Avaerage Rating</th>
                                            <th data-v-eb82546e="">Date / Time</th>
                                            <th data-v-eb82546e="">Status</th>
                                            <th data-v-eb82546e="" style="width: 12%;">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody data-v-eb82546e="">
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr data-v-eb82546e="">
                                            <td data-v-eb82546e="">Yami-1022</td>
                                            <td data-v-eb82546e="">My Shop</td>
                                            <td data-v-eb82546e="">Rizwan</td>
                                            <td data-v-eb82546e="">100</td>
                                            <td data-v-eb82546e=""><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star" style="color: rgb(0, 166, 90);"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i><i data-v-eb82546e="" class="fa fa-star-o"></i></td>
                                            <td data-v-eb82546e="">17:20-19.04.2019</td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-warning">UnSeen</a></td>
                                            <td data-v-eb82546e=""><a data-v-eb82546e="" href="#" class="btn btn-info"><i data-v-eb82546e="" class="fa fa-eye"></i></a><a data-v-eb82546e="" href="#" class="btn btn-success"><i data-v-eb82546e="" class="fa fa-close"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-eb82546e="" id="settings" class="tab-pane">
            <div data-v-eb82546e="" class="row docs-premium-template">
                <div data-v-eb82546e="" class="col-sm-12 col-md-12">
                    <div data-v-eb82546e="" class="box box-solid">
                        <div data-v-eb82546e="" class="box-body">
                            <h4 data-v-eb82546e="" style="background-color: rgb(247, 247, 247); font-size: 18px; text-align: center; padding: 7px 10px; margin-top: 0px;">
                                How to receive the Orders
                            </h4>
                            <div data-v-eb82546e="" class="media"></div>
                            <div data-v-eb82546e="" class="media-body text-center">
                                <div data-v-eb82546e="" class="clearfix"><label data-v-eb82546e=""><input data-v-eb82546e="" type="radio" name="r3" id="show1" class="flat-red">
                                    By Fax
                                    </label><label data-v-eb82546e="" style="margin-left: 40px;"><input data-v-eb82546e="" type="radio" name="r3" id="show2" class="flat-red">
                                    By E-Mail
                                    </label><label data-v-eb82546e="" style="margin-left: 40px;"><input data-v-eb82546e="" type="radio" name="r3" id="show3" class="flat-red">
                                    BY UMTS
                                    </label>
                                </div>
                                <div data-v-eb82546e="" id="div1" style="display: none;">
                                    <br data-v-eb82546e=""><br data-v-eb82546e="">
                                    <div data-v-eb82546e="" class="col-md-1"></div>
                                    <div data-v-eb82546e="" class="col-md-1"></div>
                                    <div data-v-eb82546e="" class="col-md-8"><input data-v-eb82546e="" type="text" placeholder="" id="how_much" class="form-control"></div>
                                    <div data-v-eb82546e="" class="col-md-1"><a data-v-eb82546e="" href="#" class="btn btn-primary">Save</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
</div>
</template>

<script>

export default {
  name: 'ProfileTabs',
  props:{
    details : {
      type : [Array,Object],
      default : () => {}
    }
  },
  components: {
    
  },
  data: function () {
    return {
        selectedLargeImage : null
    }
  },
  mounted(){
    
  },
  methods:{
    showLargeImage(url){
        this.selectedLargeImage = url;
        $("#photo2eModal").modal('show')
    },
    printImage(url){
        this.selectedLargeImage = url;
        $("#iframeModal").modal('show')
    },
    getFilename(url)
    {
       if (url)
       {
          var m = url.toString().match(/.*\/(.+?)\./);
          if (m && m.length > 1)
          {
             return m[1] +'.'+ url.split('.').pop();
          }
       }
       return "";
    },
    downloadItem(uri,text){
        var link = document.createElement("a");
        link.targe= "_blank";   
        link.href = `${process.env.VUE_APP_DOWNLOAD_URL}download/${this.getFilename(uri)}/${text}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    
  }
}
</script>

<style scoped>

table {
    font-family: arial,sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top: 30px;
    padding: 265px;
    border: 2px solid beige;
    background-color: transparent;
    border-spacing: 0;
}

tr:nth-child(2n) {
  background-color: #ddd;
}

td, th {
    text-align: left;
    padding: 8px;
    font-size: 16px;
}

.modal .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    padding: 10px;
    background: #00a65a;
    color: #fff;
    position: relative;
    border: none;
}

.document_table tr:nth-child(2n) {
    background-color: #fff;
}

.document_table>tr>td {
    border: 2px solid beige;
    padding: 6px 50px;
}

.mailbox-attachment-icon.has-img img
{
    height: 150px;
}

.modal:before{
    content : none !important;
}
</style>
