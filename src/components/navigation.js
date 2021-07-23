import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">
          <svg
            width="184"
            height="48"
            viewBox="0 0 184 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.2988 28.1494H33.6934C35.9082 28.1494 37.7949 29.0518 39.3535 30.8564C41.0488 33.0303 41.8965 35.8193 41.8965 39.2236C41.8965 43.9131 40.2559 47.4951 36.9746 49.9697C34.2129 51.2822 32.0254 51.9385 30.4121 51.9385H29.8379C27.2812 51.9385 25.5312 50.6533 24.5879 48.083L24.5059 47.5088V47.0986C24.5059 44.1455 26.2559 41.083 29.7559 37.9111C31.2871 36.708 32.2168 36.1064 32.5449 36.1064C33.584 36.5166 34.1035 37.2002 34.1035 38.1572C34.1035 38.9639 33.6113 39.6475 32.627 40.208C29.7285 42.6279 28.2793 44.7061 28.2793 46.4424V46.6885C28.2793 47.5635 28.7715 48.001 29.7559 48.001L30.3301 48.083C33.0645 48.083 35.334 46.7705 37.1387 44.1455C37.9043 42.5049 38.2871 40.8369 38.2871 39.1416V38.8955C38.2871 35.8604 37.4668 33.7002 35.8262 32.415C35.2109 32.0869 34.6367 31.9229 34.1035 31.9229H33.6113C29.6875 31.9229 25.9688 35.1768 22.4551 41.6846C21.0332 44.7061 20.3223 47.5498 20.3223 50.2158C20.3223 54.0576 21.9629 56.6553 25.2441 58.0088C28.2793 58.8838 30.9043 59.3213 33.1191 59.3213H33.8574C36.1816 59.3213 38.834 58.8564 41.8145 57.9268H41.8965C42.9355 58.1045 43.4551 58.5967 43.4551 59.4033V59.8955C43.4551 60.7432 42.6348 61.29 40.9941 61.5361C37.1113 62.5205 33.8301 63.0127 31.1504 63.0127C27.6504 63.0127 24.4512 62.165 21.5527 60.4697C18.0527 57.8857 16.3027 54.5225 16.3027 50.3799C16.3027 46.1826 17.7246 41.6709 20.5684 36.8447C23.4531 32.5518 26.8164 29.7354 30.6582 28.3955L32.2988 28.1494ZM51.043 30.4258H51.7812C53.4902 30.4258 55.0488 31.875 56.457 34.7734C57.1133 36.4414 57.4414 37.9453 57.4414 39.2852V41.2539C57.4414 44.2344 56.293 47.1055 53.9961 49.8672C52.5605 51.2891 50.8105 52 48.7461 52C46.791 52 45.0684 51.2891 43.5781 49.8672C42.7031 48.3223 42.2656 46.6543 42.2656 44.8633C42.2656 40.748 43.9609 36.7285 47.3516 32.8047C49.0195 31.2188 50.25 30.4258 51.043 30.4258ZM46.2031 44.9453C46.2441 47.1875 46.873 48.4453 48.0898 48.7188H48.418C49.5117 48.7188 50.7148 47.2969 52.0273 44.4531C52.793 42.6484 53.1758 40.7617 53.1758 38.793C53.1758 36.9062 52.7383 35.3477 51.8633 34.1172C49.9355 34.9922 48.4316 36.9062 47.3516 39.8594C46.5859 41.5273 46.2031 43.2227 46.2031 44.9453ZM65.4395 27.0625H67.0801C68.7344 27.0625 70.9492 28.293 73.7246 30.7539L74.5449 30.6719H74.873C80.5605 30.6719 85.5645 34.2266 89.8848 41.3359C91.4707 44.6445 92.2637 47.5977 92.2637 50.1953V50.5234C91.7578 51.3984 91.2109 51.8359 90.623 51.8359H90.541C89.8301 51.8359 89.2012 51.3164 88.6543 50.2773C88.6543 47.5293 87.2324 44.084 84.3887 39.9414C81.4355 36.332 78.4551 34.5273 75.4473 34.5273H74.1348C73.752 34.5273 73.5605 34.8008 73.5605 35.3477V35.5938C73.5605 36.291 74.6543 36.8926 76.8418 37.3984C79.7949 38.7246 81.873 40.7207 83.0762 43.3867L83.4043 45.2734V46.0117C83.4043 48.2266 82.1465 49.8398 79.6309 50.8516C79.0566 51.0156 78.4824 51.0977 77.9082 51.0977H77.8262C76.1719 51.0977 74.4492 50.4688 72.6582 49.2109H72.5762C71.1133 51.0703 69.2539 52 66.998 52C64.2773 52 62.4453 50.4141 61.502 47.2422L61.3379 45.8477V45.2734C61.3379 42.3066 62.9785 38.9434 66.2598 35.1836C67.9824 33.4609 69.1855 32.4492 69.8691 32.1484C68.8574 31.2734 67.7637 30.8359 66.5879 30.8359H66.5059C64.2227 30.8359 62.3633 32.5039 60.9277 35.8398C60.4902 36.2227 60.0801 36.4141 59.6973 36.4141H59.4512C58.3574 36.1953 57.8105 35.457 57.8105 34.1992C58.2207 32.5039 59.3691 30.6719 61.2559 28.7031C62.8281 27.6094 64.2227 27.0625 65.4395 27.0625ZM64.6191 44.7812C64.6191 46.9141 65.4121 48.1719 66.998 48.5547H67.6543C69.2949 48.5547 70.1152 46.3672 70.1152 41.9922C70.1152 41.2812 70.6074 40.8438 71.5918 40.6797H71.9199C73.1777 40.6797 73.8066 41.2539 73.8066 42.4023C74.1758 44.4395 74.75 45.916 75.5293 46.832C76.2539 47.3789 76.9375 47.6523 77.5801 47.6523L78.0723 47.7344C79.166 47.7344 79.7129 47.1328 79.7129 45.9297C79.7129 44.0156 78.8379 42.293 77.0879 40.7617C76.7324 40.4883 75.1465 39.9414 72.3301 39.1211C71.4551 38.5742 70.8535 37.918 70.5254 37.1523C70.4297 36.4414 70.3477 36.0859 70.2793 36.0859C67.9688 37.207 66.1914 39.3945 64.9473 42.6484L64.6191 44.7812ZM98.4775 26.4268H100.118C101.772 26.4268 103.987 27.6572 106.763 30.1182L107.583 30.0361H107.911C113.599 30.0361 118.603 33.5908 122.923 40.7002C124.509 44.0361 125.302 46.9893 125.302 49.5596V49.7236C124.837 50.7627 124.29 51.2822 123.661 51.2822C122.349 50.8584 121.692 50.2021 121.692 49.3135C121.46 46.8799 120.339 44.0908 118.329 40.9463C116.442 38.3213 114.474 36.3799 112.423 35.1221C110.919 34.3564 109.962 33.9736 109.552 33.9736C110.591 35.9424 111.11 38.0752 111.11 40.3721V40.7822C111.11 45.1572 109.497 48.6572 106.271 51.2822C104.808 51.9932 103.468 52.3486 102.251 52.3486C98.0127 52.3486 94.9775 48.5479 93.1455 40.9463V40.8643C93.1455 39.374 93.6924 38.499 94.7861 38.2393H94.9502C95.7705 38.2393 96.3721 39.0049 96.7549 40.5361L97.083 40.7822H98.2314C99.749 40.7822 100.679 38.7861 101.021 34.7939C101.718 32.6064 102.347 31.5127 102.907 31.5127C101.896 30.6377 100.802 30.2002 99.626 30.2002H99.5439C97.2471 30.2002 95.415 31.8408 94.0479 35.1221C93.5283 35.5869 93.0361 35.833 92.5713 35.8604C91.6553 35.8604 91.0811 35.1221 90.8486 33.6455C91.1357 32.1553 92.1748 30.4053 93.9658 28.3955C95.5518 27.083 97.0557 26.4268 98.4775 26.4268ZM105.45 34.3838C105.04 34.3838 104.466 36.6807 103.728 41.2744C102.935 43.626 102.087 44.8018 101.185 44.8018L99.4619 44.6377C99.1338 44.7607 98.9697 44.8701 98.9697 44.9658C98.9697 46.1279 99.5166 47.3311 100.61 48.5752C101.239 48.8486 101.677 48.9854 101.923 48.9854C103.509 48.9854 105.013 47.7275 106.435 45.2119C106.981 43.749 107.255 42.3271 107.255 40.9463V40.5361C107.255 38.1846 106.653 36.1338 105.45 34.3838ZM120.893 10.6973H121.549C122.355 10.6973 122.984 11.2715 123.436 12.4199V12.8301C122.246 21.5254 121.535 25.873 121.303 25.873C120.906 26.2559 120.469 26.4473 119.99 26.4473C119.115 26.4473 118.486 25.9551 118.104 24.9707C118.924 16.6719 119.416 12.2422 119.58 11.6816C120.018 11.0254 120.455 10.6973 120.893 10.6973ZM134.674 20.9102H135.74C138.215 20.9102 139.992 21.9492 141.072 24.0273C141.4 24.752 141.564 25.5449 141.564 26.4062V27.2266C141.564 29.5098 140.334 33.4746 137.873 39.1211C136.998 41.7461 136.561 43.8242 136.561 45.3555C136.738 47.1602 137.203 48.0625 137.955 48.0625C138.174 48.2266 138.639 48.3086 139.35 48.3086C140.676 48.3086 141.551 47.2969 141.975 45.2734C142.316 42.2109 142.59 40.6797 142.795 40.6797C143.164 40.4062 143.629 40.2695 144.189 40.2695H144.518C145.611 40.2695 146.158 40.7891 146.158 41.8281C146.158 43.1543 146.65 44.7402 147.635 46.5859C148.113 47.4609 148.906 47.8984 150.014 47.8984H150.26C152.283 47.707 153.295 46.7227 153.295 44.9453V44.207C153.295 41.4043 151.053 39.1621 146.568 37.4805C143.287 35.8125 141.646 33.5703 141.646 30.7539C141.646 27.7734 144.135 25.4492 149.111 23.7812L150.588 23.6172C151.941 23.6172 153.008 24.1094 153.787 25.0938L154.033 26.2422C154.033 27.1855 153.377 27.7598 152.064 27.9648C151.285 27.6914 150.684 27.5547 150.26 27.5547H149.768C148.578 27.5547 147.266 28.4023 145.83 30.0977C145.611 30.4668 145.502 30.7949 145.502 31.082V31.4102C145.502 32.627 146.842 33.7207 149.521 34.6914C151.641 35.7305 153.582 37.125 155.346 38.875C157.041 41.0352 157.889 42.8672 157.889 44.3711V45.6836C157.889 47.5566 156.658 49.252 154.197 50.7695C152.748 51.3164 151.518 51.5898 150.506 51.5898C148.51 51.5898 146.596 50.8516 144.764 49.375C142.672 51.125 140.648 52 138.693 52C136.014 52 134.127 50.4414 133.033 47.3242L132.623 44.6172C130.189 46.8594 128.631 47.9805 127.947 47.9805H127.537C126.717 47.9805 126.225 47.4609 126.061 46.4219V46.2578C126.061 45.0547 126.689 44.1797 127.947 43.6328C130.518 41.4863 132.35 39.5996 133.443 37.9727C136.506 33.6523 138.037 30.125 138.037 27.3906C138.037 26.1055 137.299 25.1758 135.822 24.6016C135.576 24.4922 135.221 24.4375 134.756 24.4375C133.389 24.4375 131.912 25.6133 130.326 27.9648C129.67 29.0996 129.342 30.2207 129.342 31.3281C129.342 32.2168 129.588 32.8184 130.08 33.1328H130.49C131.68 33.1328 132.855 31.7109 134.018 28.8672C134.592 28.4844 135.111 28.293 135.576 28.293C136.396 28.293 136.916 28.8945 137.135 30.0977V30.5898C137.135 31.3965 136.752 32.2168 135.986 33.0508C134.209 35.6758 132.459 36.9883 130.736 36.9883H130.49C128.549 36.9883 127.072 35.8945 126.061 33.707C125.787 33.0371 125.65 32.2988 125.65 31.4922C125.65 28.4707 127.236 25.5449 130.408 22.7148C132.035 21.5117 133.457 20.9102 134.674 20.9102ZM153.254 10.6973H153.91C154.717 10.6973 155.346 11.2715 155.797 12.4199V12.8301C154.607 21.5254 153.896 25.873 153.664 25.873C153.268 26.2559 152.83 26.4473 152.352 26.4473C151.477 26.4473 150.848 25.9551 150.465 24.9707C151.285 16.6719 151.777 12.2422 151.941 11.6816C152.379 11.0254 152.816 10.6973 153.254 10.6973Z"
              fill="black"
            />
          </svg>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/achchi/">ආච්චි</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/lankans/">ලන්කන්ස්</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/geta-padha/"> ගැටපද</Link>
      </li>
    </ul>
  </nav>
);
