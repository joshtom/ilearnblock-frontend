<template>
  <div>
    <a-modal
      v-model="visible"
      title="MENU"
      @ok="handleOk"
      :dialog-style="{ top: '20px' }"
      :footer="null"
      class="mobile-modal"
    >
      <template #closeIcon> <CloseIcon /> </template>
      <div class="mobile-modal-container">
        <ul>
          <li>
            <nuxt-link to="/skills" class="menu-link"> Skills </nuxt-link>
          </li>
          <!-- Company -->
          <li>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <nuxt-link to="/#" class="menu-link">
                  Company <a-icon type="down" />
                </nuxt-link>
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <nuxt-link to="/about"> About Us </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/blog"> Blog </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/contact"> Help Center </nuxt-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
          <!-- Education -->
          <li>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <nuxt-link to="/#" class="menu-link">
                  Education <a-icon type="down" />
                </nuxt-link>
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <nuxt-link to="/course"> Courses </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/glossary"> Glossary </nuxt-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
          <!-- Service -->
          <li>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <nuxt-link to="/#" class="menu-link">
                  Service <a-icon type="down" />
                </nuxt-link>
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <nuxt-link to="/training"> Training </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/trade"> Trade Cryptocurrency </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/investment"> Investment </nuxt-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
        </ul>
      </div>
      <div class="footer">
        <nuxt-link to="/login"> Sign In <a-icon type="right" /> </nuxt-link>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  components: {
    CloseIcon: () => import("~/assets/icons/closeIcon.vue"),
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.mobile-modal {
  .ant-modal-header {
    border-bottom: 0;
  }
  .ant-modal-content {
    margin: 3px;
  }
  .ant-modal-body {
    padding-top: 0;
    padding-left: 0;
    padding: 0;

    .mobile-modal-container {
      width: 100%;
      min-height: auto;
      padding: 0 24px;
      margin-top: 1rem;

      ul {
        list-style-type: none;
        li {
          margin-bottom: 1.2rem;
          &:last-child {
            margin-bottom: 1.5rem;
          }
        }
      }

      .menu-link {
        color: rgba(0, 0, 0, 0.85);
        font-size: 18px;
        margin: 1rem 0;
        position: relative;

        & > i > svg {
          width: 12px;
        }
      }
    }
    .footer {
      background: #ff9100;
      background: #f7f7f7;
      width: 100%;
      min-height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;

      a {
        padding: 0.5rem 0.9rem;
        background: #fbbf24;
        background: #ff9100;
        color: white;
        font-size: 14px;
        border-radius: 16px;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
