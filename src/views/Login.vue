<template>
  <div class="Login">

    <notifications group="auth" class="notifications" />

    <div class="window">
      <div class="profile">&nbsp;</div>
      <div class="header">
        <h1>Welcome</h1>
        <h2>Have a nice day</h2>
      </div>
      <div class="container">
        <form>
          <input :class="{'error' : errors.email}" type="text" v-model="postData.payload.email" placeholder="User" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>
           <span class="error" v-if="errors.email">{{errors.email}}</span>
          <input :class="{'error' : errors.password}" type="password" v-model="postData.payload.password" placeholder="Password" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>
           <span class="error" v-if="errors.password">{{errors.password}}</span>
          <button @click.prevent="login" :disabled="disableBtn">
            <i v-if="disableBtn" class="fa fa-spinner fa-spin"></i> Login
         </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      disableBtn : false,
        postData:{
            payload: {
                email: '',
                password: '', 
            },
            url: process.env.VUE_APP_API_BASE_URL+'admin/login'
        },
        errors : []
    }
  },
  methods: {

    checkForm: function () 
    {
        this.errors = [];

        if (this.postData.payload.email && this.postData.payload.password) {
            return true;
        }

        if (!this.name) {
            this.errors['email'] = 'Username is required.';
        }
        if (!this.postData.payload.password) {
            this.errors['password'] = 'Password is required.';
        }

        return false;
    },
    login(e)
    {

        if(!this.checkForm()) { return false }

        this.disableBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' , this.postData)
        .then(response => {
            this.disableBtn = false;

            if(response.data.error == false)
            {
              this.$notify({
                  group: 'auth',
                  type: 'success',
                  title: 'Success',
                  text: 'Loggedin Successfully,'
              });

              // this.$store.commit('SET_AUTH_TOKEN',true)
              localStorage.setItem('AUTH_TOKEN',true)

              window.location.href = '/dashboard'

              // this.$store.commit('SET_COMPANY_STATE',response.data.data.shop);

              // this.$router.push({path:'/dashboard'}).catch((err) => {
              //     throw new Error(`Problem handling something: ${err}.`);
              // });
            }
            else
            {
                this.$notify({
                  group: 'auth',
                  type: 'error',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {
            this.disableBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'auth',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    }
  }
}
</script>

<style lang="scss">
@keyframes slide {
  100% { top: 50%; }
}
.Login {
  position: fixed;
  background: #222d32;
  z-index: 9999999;
  height: 100vh;
  width: 100%;
  left: 0px;
  top: 0px;

  .window {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: auto;
    background: #F7F4FA;
    border-radius: 5px;
    color: black;
    box-shadow: 0 5px 20px 0 #222;
    animation: slide 500ms ease 0ms 1 forwards;

    .profile {
      position: absolute;
      top: 0;
      left: 50%;
      -webkit-transform: translate(-50%, -40%);
      transform: translate(-50%, -40%);
      height: 100px;
      width: 100px;
      border-radius: 100%;
      border: 0.2rem solid #EBEAEC;
      -webkit-box-shadow: 0 5px 5px 0 #ccc;
      box-shadow: 0 5px 5px 0 #ccc;
      background-color: #333;
      background-image: url(/img/yamiyamilogo-square.27d4c4c6.png);
      background-size: 80px 60px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .header {
      background: linear-gradient(#F7F4FA, #E4E2E5);
      border-bottom: 1px solid #DCDADD;
      border-radius: 5px 5px 0 0;
      padding: 3.7rem 1rem 1rem 1rem;
      width: 100%;
      height: auto;
      text-align: center;

      h1 {
        font-size: 20px;
        margin: 30px 0px 0px 0px;
        font-weight: 900;
      }
      h2 {
        font-size: 18px;
        font-weight: 400;
        margin: 5px 0px 15px 0px;
      }
    }
    .container {
      border-top: 1px solid white;
      width: 100%;
      height: auto;
      padding: 20px;

      :first-child {
        margin-top: 0;
      }
      :last-child {
        margin-bottom: 0;
      }

      p {
        text-align: center;
      }
      input {
        margin: 10px 0;
        width: 100%;
        font: inherit;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        user-select: text;
        cursor: text;
        &:invalid {
          outline: none;
          box-shadow: 0 0 3px 1px #FF0000;
        }
        &:required {
          outilne: none;
          box-shadow: none;
        }
      }
      button {
        margin: 5px 0;
        width: 100%;
        height: 50px;
        font: inherit;
        color: white;
        background: linear-gradient(#34AAE5, #2897DC);
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:active {
          background: #1974B6;
        }
      }
    }
  }
}
</style>
