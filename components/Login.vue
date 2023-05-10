<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <div class="lg:w-1/2 bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/images/valpcr_login_bg.jpg');">
      <div class="text-center px-6">
        <img src="/images/valpcr_logo.svg" height="auto" width="50%" class="mx-auto mb-4" alt="valpcr logo" />
        <h2 class="text-4xl font-bold mb-4">Welcome to ValPCR</h2>
        <p>The first electronic patient care reporting (EPCR)</p>
        <p>system in VAlenzuela City.</p>
      </div>
    </div>
    <div class="lg:w-1/2 bg-[#D7E4F3] text-white flex items-center justify-center">
      <div class="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 class="text-3xl mb-8 text-center text-black">USER LOG IN</h1>
        <p class="ml-1 mr-1 text-center text-black mb-8">Please login with your username and password below</p>
        <form>
          <div class="mb-4 relative">
            <label class="block text-gray-700 font-bold mb-2" for="username">
              <i class="fas fa-user absolute left-0 top-2"></i>
              <span class="sr-only">Username</span>
            </label>
            <input class="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-4 relative">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              <i class="fas fa-lock absolute left-0 top-2"></i>
              <span class="sr-only">Password</span>
            </label>
            <input class="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
          </div>
          <div class="flex justify-between mb-4">
            <label class="block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
              Remember me
            </span>
            </label>
            <a class="text-blue-500 hover:text-blue-700 text-sm" href="#">Forgot password?</a>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
