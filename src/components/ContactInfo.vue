<template>
  <footer id="footer">
    <section class="contact" id="contact">
      <form class="contact-form">
        <h4>Contact</h4>
        <p>Question? Go ahead.</p>
        <p><input class="width100" placeholder="Name"></p>
        <p><input class="width100" placeholder="Email"></p>
        <p><input class="width100" placeholder="Subject"></p>
        <p><input class="width100" placeholder="Message"></p>
        <button class="button button-black width100">Send</button>
      </form>
      <div class="contact-links">
        <h4>About</h4>
        <p><a class="a-underline" href="">About us</a></p>
        <p><a class="a-underline" href="">We're hiring</a></p>
        <p><a class="a-underline" href="">Support</a></p>
        <p><a class="a-underline" href="">Find store</a></p>
        <p><a class="a-underline" href="">Shipment</a></p>
        <p><a class="a-underline" href="">Payment</a></p>
        <p><a class="a-underline" href="">Gift card</a></p>
        <p><a class="a-underline" href="">Return</a></p>
        <p><a class="a-underline" href="">Help</a></p>
      </div>
      <div class="contact-info">
        <h4>Store</h4>
        <p>
          <i class="fa fa-map-marker"></i>
          Company Name
        </p>
        <p>
          <i class="fa fa-phone"></i>
          0044123123
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i>
          ex@mail.com
        </p>
        <h4>We accept</h4>
        <p>
          <i class="fa-brands fa-cc-amex"></i>
          Amex
        </p>
        <p>
          <i class="fa fa-credit-card"></i>
          Credit Card
        </p>
        <br>
        <i class="fa-brands fa-facebook contact-info-icon"></i>
        <i class="fa-brands fa-instagram contact-info-icon"></i>
        <i class="fa-brands fa-snapchat contact-info-icon"></i>
        <i class="fa-brands fa-pinterest contact-info-icon"></i>
        <i class="fa-brands fa-twitter contact-info-icon"></i>
        <i class="fa-brands fa-linkedin contact-info-icon"></i>
      </div>
    </section>
    <div class="powered">
      Powered by
      <a href="/" class="a-underline a-white">industries</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ContactInfo.vue"
}
</script>

<style scoped>
#footer{
  line-height: 1.5;
}
.contact{
  padding: 64px 0;
  color: black;
  background-color: #f1f1f1;
  text-align: center;
  display: flex;
  font-size: 12px;
}
.contact-form{
  width: 33.33333%;
  padding: 0 20px;
}
.contact-links{
  width: 33.33333%;

}
.contact-info{
  width: 33.33333%;
  text-align: left;
}
.contact-info-icon{
  font-size: 18px;
}
.powered{
  text-align: center;
  padding: 24px;
  color: white;
  background-color: black;
}
</style>