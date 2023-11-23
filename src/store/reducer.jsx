// import {usernamered, usertokenred, usertype} from "./action.jsx";

const INITIAL_VALUE={
    countrylist:{},
    usernamered:"",
    userimgred:"",
    usertypered:"",
    usertype:"",
    usertokenred:"none",
    isauth:{},
    lang: "en",
    valueurl:"https://api.value-platform.com",
    isload: false,
    istest: false,
    mapload: false,
    error_many:false,
    sector_info:{},
    values_info:{},
    entity_info : {},
    is_s_admin:false,
    listlang:[],
    course_id:'',
    level_id:'',
    cart:[],
    idlist:[],
    langList: [],
    weblist:{
        Behavioral_values_practices: "Third: Behavioral values and practices associated with them",
        EducationalLevel: "Educational level",
        In_progress: "In progress",
        Inspiration_from:"Inspiration from Our leaders",
        JobTitle: "Job title",
        OneMoreField:"One or more field are empity",
        Send_email: "Send Email",
        TypeJob: "Type of the job",
        YearsExperience: "Years of Experience",
        account_activated_successfully:"Your account has been activated successfully",
        account_already_activated:"Account Already Activated",
        account_created: "Account Created successfully,honelease Check your Email",
        account_not_active: "Account not Active",
        actual_start: "October was the actual start of success for the honeroject.  The website received admiration and praise from Dr Saad and Dr Asif Chowdhury. their respect was significant and was the starting point for the Values Observatory, which was transformed into the WE.V platform. The website development was on the right track, and the admiration of Dr Saad and Dr Asif Chowdhury was a significant moment that helped push the project forward and marked the beginning of success. We redesigned it to reflect the values important to the world.",
        age: "Age",
        all_category: "All Category",
        all_sector: "All Sector",
        alliances: "Alliances",
        another_website: "IT’S NOT JUST ANOTHER WEBSITE",
        answer: "Answer",
        au_gust: "August 2022",
        back_home: "Back to Affilatehome",
        back_sign_in: "BACK TO SIGN IN",
        be_among: "I’m happy to be among many people who want to learn about the huge and impressive work done during the year, and the plan for the next year is also very promising.",
        be_updated: "Be updated",
        beta: "Beta",
        board_button: "Free trial",
        board_head: "Explore the best UX ever",
        board_parag: "With our responsive platform, Get the latest values from around the world in a matter of seconds.",
        building_alliance: "Building international Alliances is great because they are trying to reach and find people worldwide who support and build truly international values. The shadow of Alrwad will also reach everybody worldwide.",
        "can't_sign_in": "Can't Sign In",
        categories: "Categories",
        check_email: "Please check the Email",
        check_name: "Please check the Your Name",
        check_password: "Please check the Password",
        check_phone: "Checke Your Phone",
        check_username: "Please check the Username",
        check_your_email: "We Just Sent An Email to you! Please Check Your Email",
        choose_mode: "Choose data mode",
        choose_sector: "Choose Sector",
        clients_specific:"Clients Specific Values Index",
        collection_data: "collection data is in progress; check it soon",
        coming_soon: "Coming Soon..",
        common_values: "Common Values",
        confirm_new_password: "Confirm New Password",
        confirm_password: "Confirm Password",
        continue: "Continue",
        copy_right: "All Copy Right",
        core_corporate_values_index: "Core corporate Values Index",
        countries: "Countries",
        create_account_head: "Create an account",
        create_account_parag: "It's the first step for you to go into the dashboard Start by clicking on registration, write down your name, fill in your email, Set up your password, Rewrite the password again, and It's okay to click on register now.",
        cross_values: "Cross Values",
        dashboard_indexes: "Value dashboard Indexes",
        de_cem: "December 2022",
        dedicated_to:"The website is dedicated to helping people navigate the world of value and find the information they need to excel in their field.",
        deep_reflection: "The month of November, after we invested in every idea and deep reflection that we gathered on the day of the meeting with representatives of Al-Rawad companies and Dr Saad, where he gave us the green light for the whole leadership in the Al-Rawad project to build values and expressed his approval for the feasibility study of the ideas proposed by the Al-Rawad office in Egypt.",
        dr_heghine: "Dr.Heghine Manasyan",
        dr_oliver: "Dr.Oliver Rahn",
        dr_saad: "Dr.Saad Al-Khalaf",
        e_mail: "E-mail",
        email_exist: "Email Exist",
        email_invalid: "Email Invalid",
        email_less_than_8: "email less than 8",
        email_null: "email null",
        enter_email_reset_password: "Enter Your Email, And We Will Send You Instructions To How To Reset Your Password",
        enter_full_name: "enter full name",
        enter_new_password: "Enter New Password",
        enter_password: "Enter Your Password",
        enter_phone: "Enter Your Phone",
        enter_username: "Enter Your Username",
        enter_your_email: "Enter Your Email Address",
        error: "There is an error",
        evaluation: "Evaluation",
        footer_head: "Reach us on social",
        forgot_password: "Forgot Password ?",
        full_name: "Full Name",
        fullname_less_than_5: "fullname less than 5",
        fullname_more_than_50: "fullname more than 50",
        fullname_null: "fullname null",
        get_knowledge_head: "Get the knowledge",
        get_knowledge_parag: "Find the knowledge. It's pretty simple now; you can enjoy and get all the information you want. You can do multiple different searches, and you will get the specific values you need every time.",
        get_started:"Let’s Get Started",
        get_values: "Get Values",
        group_values: "Group Values",
        have_accont_sign_up: "I don't have an account",
        have_account_sign_in: "I have an account",
        here_we_offer: "Here we offer a one-stop-shop for all value-related needs, whether you're a researcher, business professional, or just someone looking to learn more about value.  The website provides a wealth of information, including Value News, Webinars, covering a wide range of topics related to value, from the latest Value Events to practical tips and how you can get fundamental strategies for implementing deals in your organization from tracking social value. The website also includes an extensive collection of Value Social Media.With our state-of-the-art technology and unparalleled customer support, businesses can rest assured that they are getting the best solutions and support available. Whether you want to improve your customer experience, streamline your operations, or gain a competitive edge, Value Technologies has the tools and resources you need to achieve your goals. Join us today and start leveraging the power of technology to drive value for your business.",
        here_we_offer_readmore: "Here we offer a one-stop-shop for all value-related needs",
        hidden: "Hidden",
        how_search: "How to search?",
        interNational_percent: "International Benchmark Score",
        international: "International",
        itsWeV: "IT’S WE V",
        journey_button: "Start now",
        journey_head: "There is no time to waste",
        journey_parag: "Most People Try To Get It The Hard Way. But You Can Use Our Dashboard Most Easily. Our Knowledge Is Free, And You Don’t Have To Waste Time Reading Boring Books. All You Have To Do Is To Register, And You’ll Find The Knowledge You Need With Just A Click",
        language: "Language",
        lead_organizations: "Lead organizations",
        link_expired: "Link Expired",
        listen_to_pioneers: "Listen to the pioneers",
        log_out:"Sign Out",
        login: "Sign in",
        made_me_happy:"You made me very happy with your enthusiasm and ideas; God willing, we will make a real achievement soon. I look forward to the following panel discussion, the timeline, and the specifications of the initiatives in more depth.",
        main_header: "Make the right decision to get a clear value",
        main_parag: "The truth is we have to learn a new thing every day. If you are constantly asking yourself, \"What's the next step\" we can answer, \"your next step is here.\"",
        mutual_values: "Mutual Values",
        my_values: "My Values",
        name: "Name",
        national: "National",
        national_percent: "National Benchmark Score",
        nationality: "Nationality",
        next: "Next",
        no_thing: "You agree to the Terms and Conditions and Privacy Policy by signing up. See our CA Privacy Notice.",
        none: "None",
        not_match: "Passwords do not match",
        notify_me: "Notify me",
        novem_ber: "November 2022",
        octo_ber: "October 2022",
        on_december: "On December 23, we participated in the Congress of Values which some members of the company and experts from all countries of the world attended. We announced what we have prepared for the new infrastructure that we will launch by January 2023.",
        only_steps: "Only four steps",
        organization_value: "Organization Value",
        organizations: "Organizations",
        others: "Others",
        our_events: "Our Events",
        our_news: "OUR NEWSLETTER",
        password: "Password",
        password_capital_letter: "Password has a capital letter",
        password_changed: "Password changed successfully",
        password_characters: "Password has at least 5 characters",
        password_less_than_8: "Password Less Than 8 Character  Password Less Than 8 Character",
        password_no_digit: "password no digit",
        password_no_lower: "password no lower character",
        password_no_match: "password no match",
        password_no_special: "password no special character",
        password_no_upper: "password no upper character",
        password_null: "password null",
        password_number: "Password has a number",
        password_reset: "Password Reset",
        password_special: "Password has special characters",
        passwords_include: "Strong passwords must include numbers, letters, and punctuation marks.",
        passwords_match: "Passwords Matched",
        personal_basic_data: "Second: personal basic data",
        phone: "Phone",
        phone_exist: "phone exist",
        phone_less_than_11: "phone less than 11",
        phone_no_digit: "phone no digit",
        phone_null: "phone null",
        platform_ideas: "We.V platform ideas discussion",
        powerd: "Powered By AlRowad (AITSP)",
        powered_by_aitsp: "Powered By AlRowad (AITSP)",
        previous: "Previous",
        profile: "Profile",
        question: "Question",
        questionnaire_instructions: "First: the questionnaire instructions",
        range_is: "Range is",
        reach_us_on: "Reach us on social",
        readless: "Read less",
        readmore: "Read more...",
        register: "Sign up",
        remember_me: "Remember me",
        reserved: "Reserved",
        reset_password: "Reset Password",
        reset_your_password: "Reset your password",
        sample_size: "Sample Size (Org.)",
        seamless_experience: "Discover a Seamless Experience",
        sectors: "Sectors",
        select_category: "Select Category",
        select_countries: "Select Countries",
        select_country: "Select Country",
        select_country_head: "Select Country",
        select_country_parag: "The second step is choosing the country you want from the lift drop-down list. Here you can get benefits. We provide you with a choice between 204 countries from different countries, and it's great because you will find the country you want.",
        select_organizations: "Select Organizations",
        select_sector_head: "Select Sector",
        select_sector_parag: "The third step is choosing the sector you want to get the values of. We offer you 13 different sectors covering the market, so we got you.",
        select_your_country: "Select Your Country",
        select_your_sector: "Select Your Sector",
        selected_value: "Selected Value",
        settings: "settings",
        shown: "Shown",
        sign_in_to_arrowad: "Sign in",
        sign_up: "Agree and sign up",
        sign_up__to_arrowad_group: "Sign up",
        simply_awebsite: "Simply It is a website for values, and it will have many categories for helping researchers all over the world. The Value Index was created to help companies and organizations measure their corporate value.  Value surveys help clients measure their internal value and create strategies and plans to grow their organization. Here we are providing value-related data and resources to researchers.  The website will have various categories to help researchers get valuable data from corporations, which will be based on the company's annual report. The website also offers Core Corporate Values Index and UN Value Index, which are more than excellent.",
        simply_awebsite_readmore : "Simply It is a website for values, and it will have many categories for helping researchers all over the world.",
        social_value: "Social Value",
        sort_by: "Sort By",
        start_journey: "Start your journey",
        stay_connected: "Stay connected, stay updated!",
        story_behind: "Discover the Story Behind",
        study_limitation: "Study Limitation",
        submit: "Submit",
        support: "Vupport",
        tech_work: "In August 2022, the technical work on the \"value dashboard website.\" was built traditionally, and the Values Observatory was just another website on the internet. The beginning of August marked a turning point for the project. The work on the value dashboard website was moving from traditional to professional.",
        too_many_request_in_10_minuits: "too many request in 10 minuits",
        top_ten: "Top values",
        total: "Total",
        twenty_dec: "22 Dec 2022",
        two_nov: "2 November 2022",
        two_passwords: "The Two Passwords Must Be The Same"
    },



}
export default function countryListReducer( state=INITIAL_VALUE,action){
  switch(action.type){
    case 'COUNTRY_LIST':
      return {
        ...state,
        countrylist:action.payload
      }

      case 'WEB_LIST':
        return {
          ...state,
          weblist:action.payload
        }

    case 'IS_AUTH':
      return {
        ...state,
        isauth:action.payload,
       }

    case 'LANG_UAGE':
        return {
          ...state,
          lang:action.payload,
         }

         case 'LIST_LANG_UAGE':
          return {
            ...state,
            listlang:action.payload,
        }
    case 'VALUE_URL':
        return {
          ...state,
          valueurl:action.payload,
         }
    case 'IS_TEST':
        return {
          ...state,
          istest:action.payload,
         }
    case 'IS_LOAD':
        return {
          ...state,
          isload:action.payload,
         }
    case 'MAP_LOAD':
        return {
          ...state,
          mapload:action.payload,
         }
    case 'ERROR_MANY':
        return {
          ...state,
          error_many:action.payload,
         }
    case 'SECTOR_INFO':
        return {
          ...state,
          sector_info:action.payload,
         }

    case 'VALUES_INFO':
        return {
          ...state,
          values_info:action.payload,
         }

    case 'ENTITY_INFO':
        return {
          ...state,
          entity_info:action.payload,
         }

    case 'IS_S_ADMIN':
        return {
          ...state,
          is_s_admin:action.payload,
         }
    case 'COURSE_ID':
        return {
          ...state,
          course_id:action.payload,
         }
    case 'LEVEL_ID':
        return {
          ...state,
          level_id:action.payload,
         }

    case 'CART':
        return {
          ...state,
          cart:action.payload,
         }

    case 'TESTtOKEN':
        return {
          ...state,
          testToken:action.payload,
         }




            case 'SET_LANG_LIST':
                return { ...state,
                    langList: action.payload
                }
      case "SET_WEB_TRANS":
          return {...state,
              webTrans: action.payload
          }
      case 'USERTOKENRED':
          return {
              ...state,
              usertokenred:action.payload
          }

      case 'USERNAMERED':
          return {
              ...state,
              usernamered:action.payload
          }
      case 'USERTYPERED':
          return {
              ...state,
              usertypered:action.payload
          }
      case 'USERIMGRED':
          return {
              ...state,
              userimgred:action.payload
          }
    default:
      return state;
  }
}
