<template>
  <div>
    <MainHeader @contact="toggleModal" />
    <section id="welcome" class="hero is-large">
      <div class="hero-head" />
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half has-text-centered">
              <img
                src="@/assets/logo_light.png"
                alt="Ree's Desk Logo"
                width="350px"
                class="mb-5"
              >
              <h1
                class="title has-text-light is-2 is-family-secondary has-text-weight-normal"
              >
                Your Professional Business Assistant
              </h1>
              <h2 class="subtitle is-4 mt-3 has-text-light">
                30+ Years of hands-on diverse business experience,<br>
                hard work and dedication.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-primary">
      <div class="container badges">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div
              class="tile is-child box has-text-centered has-background-black has-text-white"
            >
              <img
                src="@/assets/bannerBox1.png"
                width="120px"
                height="120px"
                alt="Banner image 1"
              >
              <h2 class="subtitle is-3 mt-4 has-text-white is-family-secondary">
                Notary
              </h2>
              <p>
                New Jersey Notary Services offers an end to end Apostille
                Service. We come to your home or office to properly Notarize
                your documents. Electronic services available
              </p>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-child box has-text-centered">
              <img
                src="@/assets/bannerBox2.png"
                width="120px"
                height="120px"
                alt="20 Years"
              >
              <h2 class="subtitle is-3 mt-4 is-family-secondary">
                Experience
              </h2>
              <p>
                Hands on diverse business experience, Hardwork and Dedication
                Comprehensive knowledge of office administration, and all
                aspects of office process automation
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div
              class="tile is-child box has-text-centered has-background-black has-text-white"
            >
              <img
                src="@/assets/bannerBox3.png"
                width="120px"
                height="120px"
                alt="Woman Owned Business"
              >
              <h2 class="subtitle is-3 mt-4 has-text-white is-family-secondary">
                Woman Owned Business
              </h2>
              <p>
                Empower the women, develop the nations a woman with many
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us" class="section has-background-black">
      <div class="container content">
        <h2 class="subtitle is-2 is-family-secondary">
          Integrity, Trust, Commitment & Diversity
        </h2>
        <p class="has-text-white">
          Ree’s Desk offers a variety of Office Process Automation services,
          including, but not limited to; personalized business consulting,
          administrative support, basic IT support, and start-up business
          services.
        </p>
        <p class="has-text-white">
          We serve the needs of all types of businesses from independent
          professionals to medium and large sizedorganizations.
        </p>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <h2 class="title is-2 is-family-secondary">
          Our Services
        </h2>
        <div class="columns content mt-5">
          <div class="column">
            <div class="block">
              <h3 class="subtitle is-4 has-text-primary is-family-secondary">
                Office Process Automation
              </h3>
              <ul>
                <li>
                  Communication with legal counsel, CPA’s and business
                  associates
                </li>
                <li>
                  Coordination of financial documents for tax year preparation
                </li>
                <li>
                  Review of contracts, legal documents and formal documentation
                </li>
                <li>General office administrative work</li>
                <li>Notary Public Services (NJ)</li>
              </ul>
            </div>
            <div class="block">
              <h3 class="subtitle is-4 has-text-primary is-family-secondary">
                Business Support Services
              </h3>
              <ul>
                <li>Image branding and business name support</li>
                <li>
                  Initial business services in obtaining formation/registration
                  documents
                </li>
                <li>
                  Create business template stationery, logos, basic startup
                  websites and marketing materials.
                </li>
                <li>Database building services</li>
              </ul>
            </div>
            <div class="block">
              <h3 class="subtitle is-4 has-text-primary is-family-secondary">
                Marketing Services
              </h3>
              <ul>
                <li>Sales presentations and literature</li>
                <li>
                  Social media and E-marketing and advertising and content
                  writing.
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="block">
              <h3 class="subtitle is-4 has-text-primary is-family-secondary">
                Accounting Services
              </h3>
              <ul>
                <li>Accounting file setup (Quickbooks)</li>
                <li>
                  Template building (invoices, purchase orders, sales orders,
                  estimates, etc)
                </li>
                <li>General Bookkeeping/coding and data entry</li>
                <li>
                  Yearly tax preparation for CPA (compile and code all expenses
                  and income)
                </li>
              </ul>
            </div>
            <div class="block">
              <h3
                class="subtitle is-4 has-text-primary is-family-secondary is-family-secondary"
              >
                Property Management Support<br>
                <span class="subtitle is-6 has-text-primary">(Short-term Rentals)</span>
              </h3>
              <ul>
                <li>
                  Obtain permits licenses, and maintain proper compliance with
                  those initiatives.
                </li>
                <li>Draw up leasing agreements and Guest House Manual</li>
                <li>
                  Primary liaison between owner and hired contractors and
                  service companies
                </li>
                <li>Bookkeeping setup and maintenance (using Quickbooks)</li>
                <li>Manage listing platforms, such as Airbnb, VRBO, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="partners" class="section is-dark has-background-light">
      <div class="container">
        <div class="columns is-vcentered has-text-centered">
          <div class="column is-one-third">
            <img
              src="@/assets/ama.png"
              width="auto"
              style="max-height: 190px; max-width: 250px"
              alt="AMA logo"
            >
          </div>
          <div class="column is-one-third">
            <img
              src="@/assets/dezinerDudes.png"
              width="auto"
              style="max-height: 190px; max-width: 250px"
              alt="dezinerDudes logo"
            >
          </div>
        </div>
      </div>
    </section>

    <section id="footer" class="section has-background-primary">
      <div class="container content">
        <div class="columns is-vcentered">
          <div class="column is-two-thirds">
            <p class="subtitle is-5 has-text-white is-family-secondary">
              Dedicated to one client at a time...
            </p>
          </div>
          <div class="column">
            <b-button class="is-dark" @click="toggleModal">
              Book Appointment
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="section testimonials">
      <div class="container content">
        <div class="columns">
          <div class="column is-one-third contact-details">
            <img
              src="@/assets/logo_dark.png"
              alt="Ree's Desk Logo"
              width="180"
            >
            <p class="title is-4 mt-3">
              (973) 885-3216
            </p>
            <a href="mailto:marie@reesdesk.com">marie@reesdesk.com</a>
            <p>
              99 St. Jomblo Park,<br>Pekanbaru,<br>28292,<br>Indonesia
            </p>
          </div>
          <div class="column">
            <b-carousel>
              <b-carousel-item>
                <section class="hero">
                  <div class="hero-body has-text-centered">
                    <p>
                      “I&#39;ve known Marie for over 25 years and I&#39;m proud
                      to consider her a good friend. Although it has been quite
                      some time since we&#39;ve seen each other, I know that if
                      I need anything, she would always be there to help. Her
                      authentic good nature and positive and energetic spirit is
                      contagious. I&#39;ve always found her personal loyalty and
                      genuine kindness translates extremely well into her
                      professional life. In my opinion, Marie is the kind of
                      person we all should be so lucky to work with.”
                    </p>
                    <p>
                      <i>Joe Cerbo, Co-Founder &amp; CEO of Chavez for
                        Charity</i>
                    </p>
                  </div>
                </section>
              </b-carousel-item>
              <b-carousel-item>
                <section class="hero">
                  <div class="hero-body has-text-centered">
                    <p>
                      “Upon searching for someone capable of assisting us with
                      our accounting system we came across Marie. Marie was
                      highly recommended to us by a very good friend. At our
                      first meeting Marie presented herself both as
                      professional and friendly. It was apparent she was someone
                      who would be easy to work with and very capable of
                      handling our work. After the first month of working
                      together we learned Marie had more to offer than we
                      expected. She proved to be very efficient and detailed
                      oriented. She is knowledgeable about all facets of our
                      business and software programs. Marie has already made
                      several excellent suggestions which helped make our
                      information flow more effective.The bonus is Marie&#39;s
                      positive nature and enjoyable personality.”
                    </p>
                    <p>
                      <i>Arleen Severino, President of Diamond Point
                        Management</i>
                    </p>
                  </div>
                </section>
              </b-carousel-item>
              <b-carousel-item>
                <section class="hero">
                  <div class="hero-body has-text-centered">
                    <p>
                      “Marie Macera was not only an outstanding student when she
                      attended Montville High School, but I have also seen her
                      grow into a fine citizen, and an excellent businesswoman -
                      She comes from a family of high moral and religious
                      values, and exhibits them in her daily and business life.”
                    </p>
                    <p>
                      <i>Theresa C. Cavanaugh, LDT-C</i>
                    </p>
                  </div>
                </section>
              </b-carousel-item>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>
    <b-modal
      :on-cancel="toggleModal"
      :active="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <div class="box modal-card">
        <h3 class="subtitle">
          Contact Us
        </h3>
        <div class="content">
          <form name="contact" method="post" netlify data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact">
            <b-field>
              <b-input
                icon-pack="fas"
                icon="user"
                placeholder="Name"
                type="name"
                name="name"
              />
            </b-field>
            <b-field>
              <b-input
                icon-pack="fas"
                icon="envelope"
                placeholder="Email"
                type="email"
                name="email"
              />
            </b-field>
            <b-field>
              <b-input
                maxlength="200"
                placeholder="Message"
                type="textarea"
                name="message"
              />
            </b-field>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary" type="submit">
                  <span class="icon is-small">
                    <i class="fas fa-paper-plane" />
                  </span>
                  <span>Send</span>
                </button>
              </div>
              <div class="control">
                <button
                  class="button is-light"
                  @click="
                    $event.preventDefault();
                    toggleModal();
                  "
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isComponentModalActive: false
    }
  },
  mounted () {
    this.addFixedbody()
  },
  methods: {
    addFixedbody () {
      const body = document.body
      body.classList.add('has-navbar-fixed-top')
    },
    toggleModal () {
      this.isComponentModalActive = !this.isComponentModalActive
    }
  }
}
</script>
<style lang="scss" scoped>
.badges {
  .box {
    padding: 2.7rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
}

#about-us {
  h2 {
    padding: 10px 20px 17px;
    color: $primary;
    border: 1px solid $primary;
  }
}
.testimonials {
  background-image: url(@/assets/testimonials_bg.png);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: top right;
  .carousel-items .hero {
    height: 340px;
  }
}
#welcome {
  background-image: url(@/assets/banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.contact-details {
  padding-top: 25px;
}
</style>
