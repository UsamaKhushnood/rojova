<template>
  <div class="Home">
    <section class="content-header">
      <h1>
        User Profile
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">User Profile</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-3">
          <ProfileBox></ProfileBox>
          <br/>
          <AboutBox></AboutBox>
        </div>
        <div class="col-md-9">

          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href=".ProfileInfoActivity" data-toggle="tab"><b>Activity</b></a></li>
              <li><a href=".ProfileInfoTimeline" data-toggle="tab"><b>Timeline</b></a></li>
              <!-- <li><a href=".ProfileInfoSettings" data-toggle="tab"><b>Settings</b></a></li> -->
              <li><a href=".ProfileInfoChangePassword" data-toggle="tab"><b>Change Password</b></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane ProfileInfoActivity active">
                <ProfileActivity></ProfileActivity>
              </div>
              <div class="tab-pane ProfileInfoTimeline">
                <ProfileTimeLine></ProfileTimeLine>
              </div>
              <div class="tab-pane ProfileInfoSettings">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-10">
                      <input type="email"  class="form-control" id="inputName" placeholder="Name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail"  class="col-sm-2 control-label">Email</label>

                    <div class="col-sm-10">
                      <input type="email" v-model="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputName" placeholder="Name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                    <div class="col-sm-10">
                      <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputSkills" class="col-sm-2 control-label">Skills</label>

                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-danger">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane ProfileInfoChangePassword">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="inputName" class="col-sm-3 control-label">Email</label>

                    <div class="col-sm-9">
                      <input type="text" v-model="details.email" class="form-control" id="InputEmails" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-3 control-label">Old Passworde</label>

                    <div class="col-sm-9">
                      <input type="password" v-model="details.oldpassword" class="form-control" id="inputName" placeholder="Name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail" class="col-sm-3 control-label">New Pssword</label>

                    <div class="col-sm-9">
                      <input type="password" v-model="details.newpassword" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputName" class="col-sm-3 control-label">Re-Enter New Password </label>

                    <div class="col-sm-9">
                      <input type="password" v-model="details.repassword" class="form-control" id="inputName" placeholder="Name">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <a @click="changepassword" class="btn btn-danger">Submit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutBox from '@/components/AboutBox.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import ProfileTimeLine from '@/components/ProfileTimeLine.vue'
import ProfileActivity from '@/components/ProfileActivity.vue'

export default {
  name: 'Profile',
  data:function(){
    return {
      details : {
        email : this.$store.getters.getUsername,
        oldpassword: "",
        newpassword : "",
        repassword : ""
      }
        
    }
  },
  methods : {
    changepassword(){
      this.$store.dispatch('editcredientials' , this.details)
      .then(response => {
        console.log('data' + response)
      })
      .catch(response => {
        let errormessage = response.response.data.message;
        alert(errormessage);
      })
    }
  },
  components: {
    ProfileBox, AboutBox, ProfileActivity, ProfileTimeLine
  }
}
</script>
