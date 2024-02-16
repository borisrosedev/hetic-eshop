<template>
  <header>
    <section>
      <figure>
        <img src="/sugar.png" alt="Logo de Miam-Shop" />
      </figure>
    </section>
    <nav>
      <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'home']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'store-alt']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup></script>
<style lang="scss" scoped>

@mixin flexBox($dir:row, $just:flex-start, $align:flex-start){
  flex-direction: $dir;
  justify-content: $just;
  align-items: $align;
  display: flex
}

@mixin circle($w:30px){
  width: $w;
  height: $w;
  border-radius: 50%;
}

header {
  @include flexBox(row,space-between,center);
  background-color: var(--primary-color);
  color: white;
  padding: 0 10px;
  height: 8vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  figure {
    @include circle();
  
  }

  li {
    margin-inline: 10px;
    &:hover {
      cursor: pointer;
    }
  }
}

</style>
