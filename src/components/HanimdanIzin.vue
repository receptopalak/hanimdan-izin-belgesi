<template>
  <div class="container">
    <div class="page" ref="page">
      <div class="hanim">
        <img src="../assets/hanimdan.png" alt="" class="src" />
      </div>
      <DatePicker v-model="date" :format="format"></DatePicker>

      <div class="table">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Adı</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Soyadı</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Buluşacağı Kişi</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Buluşma Yeri</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Buluşma Nedeni</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Evden Çıkış Saati</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Eve Varış Saati</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Geç Kaldıysa Sebepleri</span
            >
          </div>
          <span style="text-align: center; margin-top: 0.5em">:</span>

          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            :placeholder="'...............................................................................................................................................................................................................................................................'"
          />
        </div>
      </div>
    </div>

    <div class="ssbutton">
      <div class="btn btn-print" @click.prevent="capture(this.$refs.page)">
        Kaydet
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  components: {},
  setup() {
    const date = ref(new Date());
    // In case of a range picker, you'll receive [Date, Date]
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `Tarih: ${day}/${month}/${year}`;
    };

    const page = ref();

    onMounted(() => {
      console.log(page); // <div>
    });

    const capture = function (page) {
      console.log(page);
      html2canvas(page).then(function (canvas) {
        canvas.toBlob(function (blob) {
          saveAs(blob, "izin.png");
        });
      });
    };

    return {
      date,
      format,
      capture,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&family=Old+Standard+TT:ital@1&display=swap");
* {
  font-family: "Old Standard TT", serif;
}

body {
  background: #a8a7ad !important;
}

input {
  background: none;
}
.hanim {
  display: flex;
  justify-content: center;
  opacity: 75%;
}

.container {
  max-width: 65vh !important;
  margin-top: 3em;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2em;
  text-align: center;
  font-weight: 700;
  margin-top: 2em;
}
.table {
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  min-width: 40vh;
  justify-content: unset;
  margin: 0 auto;
  /* max-width: 100vh; */
  border-color: #212529 !important;
}
.dp__pointer {
  cursor: pointer;
  border: none !important;
  background: none !important;
  font-family: inherit !important;
}
.dp__icon {
  display: none !important;
}
input.form-control {
  border: 0;
  background: none;
}
span#inputGroup-sizing-default {
  border: none;
  min-width: 11em;
}
.input-group.mb-3 {
  border: none;
}
.table > :not(:first-child) {
  border-top: 0 !important;
}

.no-border {
  border: 0;
  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
}
.table > :not(:first-child) {
  border-top: 0;
}
*:focus {
  outline: none;
}

.form-control:focus {
  color: #212529;
  background-color: #a8a7ad !important;
  border-color: #a8a7ad !important;
  outline: 0;
  box-shadow: none !important;
}
.dp__main {
  display: flex;
  justify-content: flex-end;
}
.dp__input_wrap {
  width: 11em !important;
}
.ssbutton {
  display: flex;
  justify-content: center;
}
.btn-print {
  color: #212529;
  background-color: #a8a7ad;
  border-color: #212529 !important;
  border: 1px solid black;
  border-radius: 0;
}
.page {
  background: #a8a7ad;
  padding: 1em;
}
</style>