<template>
  <form
    :name="formName"
    method="post"
    @submit.prevent="handleSubmit"
    action="/success/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <p>This is the {{ formName }} form!</p>
    <input type="hidden" name="form-name" :value="formName" />
    <p hidden>
      Dont' fill this out: <input name="bot-field" />
    </p>
    <div class="sender-info">
      <div>
        <label for="name" class="label">Your name</label>
        <input type="text" name="name" v-model="formData.name" />
      </div>
      <div>
        <label for="email">Your email</label>
        <input type="email" name="email" v-model="formData.email" />
      </div>
    </div>

    <div class="message-wrapper">
      <label for="message">Message</label>
      <textarea name="message" v-model="formData.message"></textarea>
    </div>

    <button type="submit">Submit form</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    }
  },
  props: {
    formName: String
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>
