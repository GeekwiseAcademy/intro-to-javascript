var sticky = {
    fixedAfter: 85,
    init: function() {
      this.header = document.getElementsByTagName("header")[0];
      this.scroll();
      this.events();
    },

    scroll: function() {
      if(window.scrollY > this.fixedAfter) {
        this.header.classList.add("header-fixed");
        this.header.classList.remove("header-relative");
      }
      else {
        this.header.classList.add("header-relative");
        this.header.classList.remove("header-fixed");
      }
    },

    events: function() {
      window.addEventListener("scroll", this.scroll.bind(this));
    }
  };

  function findTruth() {
    var theTruth = {
        "Luke Skywalker" : "Best Jedi Evar",
        "Star Trek is the best" : false,
        "Answer to meaning of life" : 42,
        "Best things in Life" : ['Star Wars', 'cheese', 'learning']
    };
        alert("Check your console");
        console.log(theTruth);
  }

  var bodyTag = document.querySelector('body');
  if(bodyTag.className == 'show-reminder') {
    alert('Did you add, commit, and push your code from last class? Did you create a new branch for today?');
  }
  if (bodyTag.className == 'welcome-msg') {
    alert("Welcome to Geekwise Academy's JavaScript 1 course. Here are some things you should know: Door code: 25829# WiFi: Bitwise or BWSS2.4 password: BUTTONBOX(all caps) Slack Channel: #js1");
  }

  var checkAuth = function() {
    var auth = prompt("What is today's code?");
    var home = "http://geekwiseacademy.github.io/intro-to-javascript";
    console.log(auth, bodyTag);
    if(auth === null) window.location.href = home;
    switch(bodyTag.id) {
      case 'day_two':
        if(auth.toLowerCase() === 'water') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_three':
        if(auth.toLowerCase() === 'bastille day') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_four':
        if(auth.toLowerCase() === 'act of contrition') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_five':
        if(auth.toLowerCase() === "you can't go home again") {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_six':
        if(auth.toLowerCase() === 'litmus') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_seven':
        if(auth.toLowerCase() === 'six degrees of separation') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_eight':
        if(auth.toLowerCase() === 'flesh and bone') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_nine':
        if(auth.toLowerCase() === 'tigh me up, tigh me down') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_ten':
        if(auth.toLowerCase() === 'the hand of god') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_eleven':
        if(auth.toLowerCase() === 'colonial day') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      default:
        window.location.href = home;
    }
  };

  if(bodyTag.id) {
    checkAuth();
  }
  document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));
