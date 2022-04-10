<template>
  <div class="bg-gray-dark flex min-h-screen pt-[50px]">
    <div class="mx-auto w-[1280px]">
      <div
        class="grid grid-cols-[repeat(4,_105px)_1fr_repeat(4,_105px)] grid-rows-[minmax(105px,_auto)_1fr] gap-[30px_15px]"
      >
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div>1</div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>

        <div class="col-span-full flex justify-between">
          <div v-for="i in 8" :key="i" class="w-[105px]">
            <img src="@/assets/cards/C1.png" class="mx-auto bg-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
