<template>
  <div class="bg-gray-dark font-lato flex min-h-screen pt-[50px] text-black">
    <div class="mx-auto w-[1280px]">
      <div
        class="grid grid-cols-[repeat(4,_105px)_1fr_repeat(4,_105px)] grid-rows-[minmax(105px,_160px)_1fr] gap-[30px_15px]"
      >
        <!-- 空白欄 (FREECELLS) -->
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>

        <div class="flex flex-col items-center justify-center">
          <img src="@/assets/kings/king_happy.png" class="mb-[6px] max-h-[50%]" />
          <span class="text-sm font-bold tracking-[1.4px]">FREECELL</span>
        </div>

        <!-- 本位欄 (HOMECELLS) -->
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>
        <div><img src="@/assets/cards/C1.png" class="mx-auto bg-white" /></div>

        <!-- 牌池 (TABLEAU) -->
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
