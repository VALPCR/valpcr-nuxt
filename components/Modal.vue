<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3 class="text-primary font-bold">{{ title }}</h3>
          <div>
            <slot></slot>
          </div>
          <footer class="flex justify-end mt-6 gap-6">
            <!-- TAKE NOTE!! yung $emit will trigger an action on parent with the @emit-name directive -->
            <!-- tulad dito, @emit('cancel-action') so pag pinindot sya, ititrigger nya yung function na nasa @cancel-action sa parent nya -->
            <!-- Pwede ka maglagay ng hanggat ilang actions mo gusto pero need mo syang ipartner sa emit action -->
            
            <button
              class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
              @click="$emit('cancel-action')" data-te-ripple-init data-te-ripple-color="light">CANCEL</button>
            <button
              class="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
              @click="$emit('delete-action')" data-te-ripple-init data-te-ripple-color="light">DELETE</button>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  /* CHANGE WIDTH TO CONTROL THICKNESS OF MODAL */
  .modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    text-align: left;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }
  
  footer {
    text-align: right;
  }
  </style>