import React from "react";

const PG = props => {
	return (
		<div>
			<svg
				width='36'
				height='36'
				viewBox='0 0 36 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='18' cy='18' r='18' fill='#5E88A4' />
				<path
					d='M22.5236 7C21.6025 7.00694 20.6867 7.14255 19.8022 7.403L19.74 7.423C19.1821 7.32319 18.6173 7.26802 18.0508 7.258C16.8872 7.238 15.8875 7.524 15.0814 8.00001C14.2872 7.72101 12.6396 7.24 10.903 7.336C9.6939 7.403 8.37418 7.77501 7.39625 8.82002C6.42127 9.86503 5.90564 11.482 6.01429 13.6821C6.04393 14.2891 6.21482 15.2791 6.49832 16.5611C6.78183 17.8431 7.17992 19.3441 7.67679 20.7131C8.17366 22.0831 8.71794 23.3131 9.56845 24.1492C9.99321 24.5682 10.578 24.9202 11.2675 24.8912C11.7515 24.8712 12.1891 24.6562 12.5665 24.3392C12.7502 24.5842 12.9468 24.6912 13.1256 24.7902C13.3508 24.9152 13.5701 25.0002 13.7973 25.0562C14.2052 25.1592 14.9036 25.2972 15.7215 25.1562C16.0001 25.1092 16.2935 25.0172 16.5859 24.8862C16.5967 25.2162 16.6096 25.5392 16.6224 25.8662C16.6629 26.9022 16.6886 27.8592 16.9958 28.6982C17.0452 28.8352 17.1805 29.5412 17.714 30.1642C18.2474 30.7882 19.2925 31.1772 20.4828 30.9192C21.3224 30.7372 22.3903 30.4092 23.0995 29.3872C23.8009 28.3772 24.117 26.9282 24.1792 24.5782C24.195 24.4512 24.2138 24.3432 24.2335 24.2422L24.4005 24.2572H24.4202C25.3162 24.2982 26.2882 24.1692 27.1002 23.7872C27.8193 23.4501 28.3636 23.1091 28.7597 22.5041C28.8585 22.3541 28.9671 22.1731 28.9968 21.8611C29.0264 21.5491 28.8496 21.0611 28.5562 20.8361C27.9685 20.3841 27.599 20.5561 27.2029 20.6391C26.8127 20.7265 26.4151 20.7753 26.0156 20.7851C27.1575 18.8381 27.9764 16.7701 28.4436 14.9401C28.7202 13.8601 28.8753 12.8641 28.8881 11.993C28.901 11.122 28.8308 10.351 28.3152 9.68402C26.7041 7.60001 24.439 7.024 22.6866 7.004C22.6323 7.003 22.578 7.002 22.5236 7.003V7ZM22.4772 7.64001C24.1348 7.62401 26.2526 8.09501 27.7729 10.062C28.1147 10.504 28.2164 11.15 28.2045 11.946C28.1917 12.7411 28.0465 13.6931 27.7808 14.7361C27.2651 16.7561 26.2912 19.1111 24.9191 21.2241C24.9675 21.259 25.0199 21.2879 25.0752 21.3101C25.3616 21.4301 26.0146 21.5331 27.3175 21.2621C27.6454 21.1921 27.8855 21.1451 28.1344 21.3371C28.1949 21.389 28.2427 21.4544 28.2741 21.5282C28.3054 21.6019 28.3195 21.682 28.3152 21.7621C28.3019 21.8835 28.2576 21.9993 28.1868 22.0981C27.9349 22.4811 27.438 22.8441 26.8009 23.1431C26.2368 23.4091 25.4278 23.5481 24.7107 23.5561C24.3511 23.5601 24.0192 23.5321 23.7377 23.4431L23.7199 23.4361C23.6112 24.4962 23.3613 26.5892 23.1983 27.5442C23.0679 28.3142 22.8397 28.9262 22.4041 29.3842C21.9695 29.8422 21.3541 30.1182 20.5263 30.2982C19.5009 30.5212 18.7531 30.2812 18.2711 29.8702C17.79 29.4602 17.5697 28.9162 17.4374 28.5832C17.3465 28.3532 17.2991 28.0552 17.2536 27.6572C17.2082 27.2592 17.1746 26.7722 17.1519 26.2232C17.1216 25.3825 17.1118 24.5413 17.1223 23.7001C16.6939 24.0973 16.1617 24.3611 15.5892 24.4602C14.9086 24.5772 14.3011 24.4622 13.9385 24.3702C13.7598 24.3247 13.5873 24.2572 13.4249 24.1692C13.2569 24.0782 13.0969 23.9752 12.9902 23.7722C12.9276 23.6559 12.9076 23.5209 12.9339 23.3911C12.9673 23.2596 13.0431 23.1431 13.1493 23.0601C13.3449 22.8991 13.6037 22.8091 13.9939 22.7271C14.7041 22.5791 14.952 22.4781 15.1032 22.3571C15.2316 22.2531 15.3768 22.0431 15.6336 21.7351C15.6324 21.7215 15.6314 21.7078 15.6307 21.6941C15.171 21.681 14.7209 21.5584 14.3169 21.3361C14.1687 21.4941 13.412 22.3041 12.4894 23.4281C12.1012 23.8982 11.6725 24.1682 11.2201 24.1872C10.7677 24.2072 10.3587 23.9762 10.011 23.6351C9.31656 22.9521 8.76239 21.7771 8.27935 20.4491C7.7973 19.1211 7.40514 17.6421 7.12657 16.3821C6.84702 15.1221 6.68206 14.1061 6.65835 13.6161C6.55463 11.534 7.03569 10.131 7.86052 9.24602C8.68633 8.36101 9.81837 8.02601 10.9218 7.96201C12.9023 7.84701 14.7831 8.54601 15.1634 8.69602C15.8964 8.19201 16.8407 7.87801 18.0202 7.89801C18.5801 7.90596 19.1373 7.97911 19.6807 8.11601L19.7005 8.10701C19.9396 8.0219 20.1834 7.95045 20.4305 7.89301C21.1014 7.73456 21.7873 7.6504 22.4762 7.64201L22.4772 7.64001ZM22.6274 8.31001H22.4831C21.9172 8.318 21.3534 8.38231 20.7999 8.50201C22.0307 9.05402 22.9602 9.90403 23.6152 10.752C24.0701 11.3392 24.4461 11.9848 24.7334 12.6721C24.842 12.9361 24.9151 13.1591 24.9566 13.3321C24.9774 13.4191 24.9912 13.4921 24.9961 13.5681C24.9981 13.6061 25.0001 13.6451 24.9843 13.7121C24.9843 13.7151 24.9793 13.7221 24.9783 13.7251C25.008 14.6011 24.7936 15.1951 24.7679 16.0311C24.7482 16.6371 24.9013 17.3491 24.9388 18.1261C24.9744 18.8561 24.8875 19.6581 24.4192 20.4451C24.4588 20.4931 24.4943 20.5411 24.5319 20.5891C25.7706 18.6141 26.6636 16.4291 27.1397 14.5661C27.3945 13.5631 27.5299 12.6541 27.5417 11.934C27.5516 11.214 27.4192 10.692 27.2503 10.474C25.9247 8.75802 24.1308 8.32101 22.6274 8.30901V8.31001ZM17.8957 8.56601C16.7281 8.56901 15.8905 8.92602 15.2553 9.46102C14.6004 10.014 14.1608 10.771 13.8724 11.546C13.5296 12.466 13.412 13.3561 13.3656 13.9601L13.3784 13.9521C13.7311 13.7521 14.1944 13.5521 14.6903 13.4361C15.1861 13.3211 15.7206 13.2851 16.2046 13.4751C16.6886 13.6651 17.0887 14.1121 17.2339 14.7901C17.9293 18.0471 17.0176 19.2581 16.6817 20.1721C16.5543 20.5034 16.4451 20.8416 16.3547 21.1851C16.3972 21.1751 16.4397 21.1631 16.4822 21.1591C16.7192 21.1391 16.9049 21.2191 17.0156 21.2671C17.3534 21.4091 17.5855 21.7071 17.711 22.0471C17.7436 22.1361 17.7673 22.2321 17.7811 22.3311C17.7957 22.3718 17.8024 22.4149 17.8009 22.4581C17.7634 23.7039 17.7677 24.9507 17.8137 26.1962C17.8365 26.7342 17.87 27.2082 17.9125 27.5822C17.955 27.9552 18.0152 28.2392 18.0538 28.3352C18.1802 28.6552 18.3649 29.0742 18.6988 29.3592C19.0327 29.6432 19.5118 29.8332 20.387 29.6432C21.1456 29.4782 21.6139 29.2492 21.927 28.9202C22.2391 28.5912 22.4258 28.1332 22.5454 27.4322C22.7242 26.3822 23.0837 23.3371 23.1272 22.7641C23.1074 22.3321 23.1706 22.0001 23.307 21.7471C23.4472 21.4871 23.6646 21.3281 23.8522 21.2421C23.9461 21.1991 24.034 21.1701 24.1061 21.1491C24.0298 21.0381 23.9497 20.9297 23.8661 20.8241C23.5955 20.4919 23.3739 20.1217 23.2082 19.7251C23.1288 19.5613 23.0442 19.4002 22.9543 19.2421C22.8229 19.0021 22.657 18.7021 22.4831 18.3651C22.1354 17.6901 21.7571 16.8721 21.5605 16.0751C21.3649 15.2791 21.3363 14.4551 21.8381 13.8741C22.2826 13.3581 23.063 13.1441 24.2345 13.2641C24.2 13.1591 24.1792 13.0721 24.1209 12.9321C23.8561 12.3009 23.5103 11.7078 23.0926 11.168C22.0999 9.88303 20.4927 8.60901 18.0093 8.56801H17.8957V8.56601ZM11.3347 8.61801C11.2092 8.61801 11.0838 8.62201 10.9593 8.62901C9.9616 8.68702 9.01824 8.98002 8.34356 9.70402C7.6679 10.428 7.22338 11.615 7.32018 13.5801C7.33895 13.9521 7.49898 14.9941 7.77359 16.2321C8.04722 17.4701 8.43543 18.9271 8.90168 20.2141C9.36891 21.5011 9.93493 22.6211 10.4723 23.1511C10.743 23.4161 10.9781 23.5231 11.1914 23.5141C11.4058 23.5041 11.6636 23.3791 11.9787 22.9961C12.5532 22.2946 13.1495 21.6116 13.7667 20.9481C13.3288 20.5632 12.9936 20.0729 12.7922 19.5224C12.5907 18.9719 12.5294 18.3789 12.6139 17.7981C12.7156 17.0591 12.7295 16.3681 12.7176 15.8221C12.7057 15.2901 12.6682 14.9361 12.6682 14.7151C12.668 14.7087 12.668 14.7024 12.6682 14.6961V14.6911L12.6672 14.6851V14.6841C12.6666 13.5329 12.8645 12.3904 13.252 11.308C13.5286 10.564 13.9405 9.80803 14.5579 9.19602C13.9514 8.99402 12.8747 8.68602 11.709 8.62801C11.584 8.62151 11.4589 8.61818 11.3337 8.61801H11.3347ZM23.5816 13.9001C22.9109 13.9091 22.5345 14.0841 22.3369 14.3131C22.0574 14.6381 22.0307 15.2081 22.2046 15.9101C22.3774 16.6131 22.735 17.3991 23.0709 18.0521C23.2388 18.3791 23.4018 18.6731 23.5332 18.9121C23.6655 19.1521 23.7624 19.3221 23.8216 19.4671C23.8759 19.6011 23.9362 19.7191 23.9974 19.8291C24.2572 19.2741 24.3037 18.7291 24.277 18.1611C24.2424 17.4581 24.0814 16.7391 24.1051 16.0111C24.1318 15.1601 24.2977 14.6061 24.3126 13.9481C24.0702 13.9163 23.826 13.9002 23.5816 13.9001ZM15.4479 14.0151C15.243 14.017 15.0389 14.0418 14.8394 14.0891C14.4418 14.1869 14.0587 14.3379 13.7005 14.5381C13.5793 14.6039 13.4639 14.6802 13.3557 14.7661L13.334 14.7861C13.3399 14.9321 13.3686 15.2861 13.3804 15.8071C13.3923 16.3771 13.3784 17.1041 13.2698 17.8911C13.0337 19.6011 14.2596 21.0171 15.6998 21.0191C15.7838 20.6681 15.9221 20.3121 16.0604 19.9371C16.4614 18.8431 17.2507 18.0451 16.5859 14.9311C16.4772 14.4211 16.2619 14.2151 15.9655 14.0991C15.7994 14.0396 15.6241 14.0111 15.4479 14.0151ZM23.2684 14.2191H23.3178C23.383 14.2211 23.4433 14.2281 23.4956 14.2411C23.549 14.2531 23.5944 14.2711 23.632 14.2961C23.6512 14.3081 23.6678 14.3242 23.6805 14.3431C23.6933 14.3621 23.702 14.3835 23.706 14.4061L23.7051 14.4141H23.706H23.7051C23.707 14.4615 23.695 14.5085 23.6705 14.5491C23.6413 14.604 23.6048 14.6544 23.5618 14.6991C23.4616 14.8108 23.3274 14.8854 23.1805 14.9111C23.0376 14.9286 22.8933 14.8919 22.7755 14.8081C22.7273 14.7752 22.684 14.7355 22.6471 14.6901C22.6151 14.6544 22.5936 14.6104 22.5849 14.5631C22.5828 14.54 22.5854 14.5167 22.5926 14.4947C22.5997 14.4727 22.6112 14.4524 22.6264 14.4351C22.6588 14.3978 22.698 14.3672 22.7419 14.3451C22.8368 14.2911 22.9652 14.2511 23.1104 14.2291C23.1647 14.2211 23.2181 14.2171 23.2684 14.2161V14.2191ZM15.5437 14.3871C15.5961 14.3871 15.6514 14.3921 15.7077 14.4001C15.8588 14.4211 15.9932 14.4621 16.0959 14.5221C16.146 14.5485 16.1906 14.5845 16.2273 14.6281C16.2473 14.6512 16.2623 14.6782 16.2715 14.7074C16.2807 14.7367 16.2838 14.7675 16.2806 14.7981C16.2711 14.8556 16.2454 14.9091 16.2066 14.9521C16.1661 15.0023 16.1185 15.0461 16.0653 15.0821C15.9368 15.1742 15.779 15.2145 15.6228 15.1951C15.4631 15.1685 15.3169 15.0882 15.2079 14.9671C15.1615 14.9183 15.1223 14.8631 15.0913 14.8031C15.0588 14.7503 15.0445 14.688 15.0508 14.6261C15.0656 14.5181 15.1536 14.4621 15.2395 14.4311C15.3374 14.3994 15.4401 14.3859 15.5427 14.3911L15.5437 14.3871ZM24.4933 21.7301L24.4904 21.7311C24.3452 21.7841 24.2256 21.8061 24.1249 21.8511C24.023 21.8908 23.939 21.967 23.8888 22.0651C23.8266 22.1801 23.7732 22.3841 23.789 22.7311C23.8337 22.7623 23.8831 22.7859 23.9352 22.8011C24.1041 22.8531 24.3876 22.8871 24.7037 22.8821C25.334 22.8751 26.1094 22.7261 26.5213 22.5321C26.8592 22.3732 27.1729 22.1661 27.4528 21.9171H27.4518C26.0758 22.2051 25.2984 22.1281 24.8213 21.9291C24.7028 21.8792 24.5923 21.8118 24.4933 21.7291V21.7301ZM16.5602 21.8241H16.5395C16.4871 21.8291 16.411 21.8471 16.2639 22.0121C15.9201 22.4021 15.7996 22.6471 15.5161 22.8761C15.2326 23.1041 14.8641 23.2261 14.1282 23.3791C13.8951 23.4271 13.7617 23.4801 13.6728 23.5231C13.7015 23.5471 13.6985 23.5531 13.742 23.5761C13.8496 23.6361 13.9879 23.6891 14.0996 23.7181C14.4157 23.7982 14.9352 23.8912 15.4776 23.7982C16.0199 23.7041 16.5839 23.4411 17.065 22.7581C17.1479 22.6401 17.1568 22.4661 17.0887 22.2791C17.0195 22.0921 16.8684 21.9311 16.7617 21.8861C16.6982 21.8551 16.6302 21.8349 16.5602 21.8261V21.8241Z'
					fill='white'
				/>
			</svg>
		</div>
	);
};

export default PG;
