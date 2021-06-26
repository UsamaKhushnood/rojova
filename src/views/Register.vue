<template>
  <div class="Login">
    <div class="window">
      <div class="profile">&nbsp;</div>
      <div class="header">
        <h1>Welcome</h1>
        <h2>Have a nice day</h2>
      </div>
      <div class="container">
        <form>
          <input type="text" v-model="user.name" placeholder="Name" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>
          <h5 class="text-red" :key="error" v-for="error in errors.name">{{error}}</h5>
          <input type="email" v-model="user.email" placeholder="Email" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>
          <h5 class="text-red" :key="error" v-for="error in errors.email">{{error}}</h5>
          <input type="password" v-model="user.password" placeholder="Password" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>
          <h5 class="text-red" :key="error" v-for="error in errors.password">{{error}}</h5>
          <input type="password" v-model="user.password_confirmation" placeholder="Confirm Password" maxlength="50" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" pattern="^.*$" required="required"/>

          <button @click.prevent="register(user)">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Register',
  components: {},
  data: function () {
    return {
        user : {
            name: null,
            email : null ,
            password: null,
            password_confirmation : null
        },
        errors : {
            name : [],
            email : [],
            password : [],
            password_confirmation : []
        }
      
    }
  },
  methods: {
    register(user){
        // console.log('user' , user)
        // axios.post(API.register , user)
        // .then(response => {
        //     console.log('response' , response)
        //     alert('Admin Register Successfully');
        //     this.$router.push({ path: '/'})
        // })
        // .catch(error => {
        //     let data = error.response.data.errors
        //     for(let key in this.errors){
        //         this.errors[key] = []

        //         let errormessage = data[key]
        //         if(errormessage){
        //             this.errors[key] = errormessage
        //         }
        //     }
        // })
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
