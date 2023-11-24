<template>
  <div class="post">
    <div class="post-header">
      <img class="post-icon" src="@/assets/images/me.png" alt="User icon" />
      <span>06.10.2023</span>
    </div>
    <div class="post-body">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium sed at libero inventore id?
        Dignissimos recusandae sed quos mollitia repellat, tenetur non unde est quae blanditiis, autem ipsam iure.</p>
    </div>
    <div class="post-footer">
      <img class="post-icon" src="@/assets/images/like.png" alt="Post reaction" />
      <span>10</span>
    </div>
  </div>
</template>

<style scoped>
.post {
  text-align: justify;
  padding: 10px;
  margin: 10px 12px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--color-background-soft);
  height:max-content;
}

.post-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
}

.post-icon {
  width: 20px;
  height: auto;
}

.post-image {
  max-width: 100%;
}

.post-body {
  margin: 5px auto 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: min-content;
  width: 100%;
  max-width: 100%;
  height: max-content;
}

.postFooter {
  display: flex;
  justify-content: left;
  min-width: min-content;
  width: 100%;
  height: 20px;
}

</style>