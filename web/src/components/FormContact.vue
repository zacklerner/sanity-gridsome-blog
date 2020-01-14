<template>
  <form-helper formName="contact">
    <div slot="form-header"></div>

    <template slot="form-fields">
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
    </template>

    <div slot="form-controls"></div>
  </form-helper>
</template>

<script>
import FormHelper from '~/components/FormHelper'

export default {
  components: {
    'form-helper': FormHelper
  }
}
</script>