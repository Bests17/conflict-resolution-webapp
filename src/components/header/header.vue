<script lang="ts">
import Button from "../button/button.vue"
import UserGroupIcon from "../icons/icon-user-group.vue"
import TimerIcon from "../icons/icon-timer.vue"
import FileOpenIcon from "../icons/icon-file-open.vue"
import NavLink from "./nav/nav-link.vue"

export default {
  components: {
    Button,
    UserGroupIcon,
    NavLink,
    TimerIcon,
    FileOpenIcon,
  },
}
</script>

<template>
  <header class="py-[22px] fixed min-h-[85px] w-full">
    <div class="container mx-auto flex gap-[65px] items-center">
      <h3 class="text-[23px] text-primary-950 font-semibold">
        Record conflict dashboard
      </h3>

      <ul class="flex gap-[38px] items-center">
        <li>
          <NavLink to="/"><UserGroupIcon /> Student record</NavLink>
        </li>

        <li>
          <NavLink to="categories"><FileOpenIcon /> File categories</NavLink>
        </li>

        <li>
          <NavLink to="activities"><TimerIcon /> Activities</NavLink>
        </li>
      </ul>
    </div>
  </header>
</template>
