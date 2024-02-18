const config = "@media screen and (max-width:";

export const screenWidth = {
   desktop: 1170,
   laptop: 992,
   tablet: 768,
   mobile: 376
};

export const breakPoints = {
   desktop: `${config} ${screenWidth.desktop}px)`,
   laptop: `${config} ${screenWidth.laptop}px)`,
   tablet: `${config} ${screenWidth.tablet}px)`,
   mobile: `${config} ${screenWidth.mobile}px)`,
}
