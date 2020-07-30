import React from "react";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem/MusicItem";
import LazyImgLoader from "../../hoc/LazyImgLoader/LazyImgLoader";

const Music = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.Music}>
				<div className={classes.Hero}>
					<LazyImgLoader
						className='lazyimg'
						aspectRatio={16 / 9}
						lqip='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAMCAgoKCgoKCgoKCgoKCggICgoKCAgICAoICAgICAgICAgICAgICAgICAgICAoICAgICgoKCAgNDQoIDQgICQj/2wBDAQMEBAYFBgoGBgoNDQoNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ3/wAARCAAbACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYDBAUHCf/EACkQAAICAQMDAwUAAwAAAAAAAAECAxEhAAQSBRNBBiIxB0JRYZEjgfD/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAoEQABAwIEBgIDAAAAAAAAAAABAgMRACEEEjFREyJBYYGhBZGxwfD/2gAMAwEAAhEDEQA/APMqB8al20xVgwokEEAqHF+LUghh+iCDrS6K6MyiZS3K1pbjYHA5MUING8fbYJIIBrpHp7Y7KAMZdiu4BCyqZ+pKkiWyhYu3thMpB4sWLASAFrUlF5KXHgk5SL+P2RXe4P4xb6eKhaQgHUhUpPSQhKiNwZjW9jXJ5VY2xFZIPt4gHyKoUR5FY81quz/9en3rjS7gyzJtnSCcxsHZml4KrZVJZ37rqWFc2Ad1+QAFArem/WMez70cmzjlkLOqySSPFIiG1X7HBAwQwKn5z51AdMHKmTsCPZ6RtVjgWeKnjPZGyDLikLMmTGVIEqCgAQZi5valGOYV8j+6NNn1B+pJ3KpG23hh7dEsoYzseNVJI4UhSCG48bJoljVE1q2FKTKhB2mfcUFjiwy8W8O7xEDRZQW535SSRBtc+KXOnzR8Czd21o3yjCciG4rVCQksMcWFC7rBO76d64X5jtLKpAuQ9yNkBIRVDo2LZlxk2PHK1VRJcWfOPgeHUCh8A15GcnOTrKc5/vjVlMpcmd/xQbXyTuEUkoNimSN5kXBkadiRJg09R9DkkcwmQKInc+92kCWCAnbY8TyZWB4kY55zTRdfiaFlVXRiCziRFCmiSOHbPNYlQNSqPyfwNRekn5xyK2RErvHgAqXVeQ5ABipKKeBJUEGlFm8/dH/LKPCFeI/HuA/3gn5vWASoLgkQOkb9/P8Aa0zU80cOFpQoOrJ5s8gJEnLly2gJgGZnYWqvuuqOzcmZmYYBb3ECite4G6GM3X6IGjVMmznyST/dGjMo2H1STju6hSu/Mb+6/9k='
						src='https://github.com/ryan-seit/ryan-site/blob/master/public/RyanDrums.jpeg?raw=true'
						alt='Ryan Playing Drums'
					/>
					<div className={classes.HeroDetail}>
						<h1>Music</h1>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						</p>
					</div>
				</div>

				<div className={classes.MusicProjects}>
					<h1>Music-Related Projects</h1>
					<MusicItem
						img='https://github.com/ryan-seit/ryan-site/blob/master/public/RyanAcheLive1.png?raw=true'
						lqip='data:image/png;base64,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PffcEwK3IGhqanIXaLBEPMgag9iI5/+CFapEB5q8CcqTTz55zTXXdO7c2c877rhD6kHcs2dPP02cxxAJnJN11lkHJqHv2LGjn4Ir6CGsVf1YQTKuPOk8sOaaa/q77777kouTdu3a7bXXXphDBkW7Ivsuv/zygfXDz65du3bv3t3JP+uHk4022mjTTTelAbgnTJhw3nnnuUidQr8cW35aQyXBvwwfHP6WWa3Yuq+99tp77rkn/Jns5ptvnjdv3plnnuknCoFwgsItttjCCbPo27cvcIicOnXq4YcfXuwjSQBZTkCXtmL917CsyV85v//++2+yySZEJl4jR460btkXOi+99NJZs2YJq58bb7wxdTuRg7179870+BNHspMK4Lpy4oknjhgxIiHOM15clqorh5V3JPz48eOvuuqqK6+8slEAlmUO+hWXxx577OKLL2bxrm+22WYFlmeGDx9uSabEirBKEXe9ct111wWNvEY5YQjI8ccff8opp9RW7u9xJpPBNH369EmTJhEW2xw3bhzCoLz//vute5999nnttdeEddiwYeIV0BtuuKFzzyxevPjrr78eO3ZsIt6ufpx11lmjR492RcSxa1jy9TwK5MTSLG1dPwKilIXY7tFHHy31iNooRx55JIHvtttuYFHS7NlzkISMPHb33Xdb6I477rjHHntccMEFMtRj0gIC6C2skemzzz77oosuigWmsCIeWzIJxFryvxxRhiPh45kmMNmQIUOSVizULYRb07PPPnvrrbeaIO9aq6HJqEuXLrIBtSeccAJncaupU9Os+iHQXvQMrO4mT5NVFizZrfykk06qhmPQbuyyyy5J7MYDsQCBxbuTMnFCUz700EMzZ8589dVXZWWMrcqgP5KrHCByKQXxxhtvfPrpp72F4NmzZws3V6viVU9eITr44IMtTJmvwg2sucnwtNNOowPEKq5nnHEGNMltaoiEUejlJOaoUaPMMXny5AcffFCpcUUoM0eWblY4cGm1RBaa77vvPmQYXHDdmjt3rogXXzARYbGPyoksUYkVeDAPO+ywe++997nnnuMuBNS4aC4Q37OMzGoOqfTAAw/cddddnILqLS9K9/eKK66YM2eObIiMZs2cKSv9pBv8uYgb4kvdlEOyijrpRCYq8Esj5aGsI+Wv1NdkQ7zYCcJScMhf/aFx4MxqrCgsddcEpEMiGUoE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'
						title='Performance'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img='https://github.com/ryan-seit/ryan-site/blob/master/public/MixingBoard.png?raw=true'
						lqip='data:image/png;base64,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'
						title='Recording + Editing'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
					<MusicItem
						img='https://github.com/ryan-seit/ryan-site/blob/master/public/MusicAcheFadeAway.jpg?raw=true'
						lqip='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAyADIDAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAwQFBgECCAf/xAAvEAACAQIEBAUEAQUAAAAAAAABAgMEEQAFEiETMUFhBgciUYEUMnGhkSNSsdHh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ArXlvV+WuT02YzeM6aSomllhFMYqZ6ngInrJuu/reyOqg6lFmGnGkWiHxZ5St4cq6ePL8ulzmSjVBXJ4cenSWb1GSRYuGwjuWv32uRbaDxKFJIo413DBACb36fvFQWKFpi3qsQC3Lb/mA0ludLM1+lxgC65UUEyGWFxY73Nuo7YDLQ02o3lmQ3+3hE27YAdVE8cqo66WIva9yPz364AsOqKMWA4l7G46YCSocuqK1RwoS5PM8yf8AWAeqvDuZ01N9TJBLEotY2IwEFVBeITMjE73I2J264BZ4tCcRJFZdtr7274DY1dSDZamYL036YAlZE0BeOos02sksDcgjmD+TvgHwiLT08TKhkkOrUDcgC4037f5OA6K8l/BdJDlzVlYgd7gafY2vv8YD0HN/DOU5jQvTPSoNQspHQ4DlHzLyhcozqdIgNAcqN779RgK5mUacKnqlPDjqoyGQckcEFrD25H5wEUeeAekSrn01EsUmmZwyuBsQtxt+LfrAMZdHVVSUzxRSSFZXjTQCfURrA/m/84Dq7yzzClyzw6tJmdbBHUDSxu97AqNvzgLJBmuVQTVM0mbQlZZAwBfZQFAsMFcvecirHn0sKkBGDunqvru2xHbv3wRUWeB8uLCIqtLMAWtcsJARy7FSfjBUNgizZJm1Vl2UJFwVkVZRMiSWIIa9zY8x9vP2wBU8XtEDAMuWKAMSoppTFpueYFiPjAP0PjCnSMpFDmQI3VWrABv3AvgCSeJRLEyilrwT9p+qBI9+m+AYhzPLqulipsypyY1voeVNbLtzFug3wFSzKKKFMzpYWDCOpVwzbEoAwAFu7XvgqGwRNV8MhieoVZDGzn1MAN+dttr79PfBSqZdUSTPDw5RIgJdSlioA3uOlsENx5HMFD8ZVB1bm4FxzF7b/HuMAWKlqWp2ZDMwjHqKRl9O/Ww/eALBSsojaSWRUkBBLRvp5cxtv8b4KZz2immp5KlqOGnLI1lERjMcaAeqS5JLbfcbdAAeeAiEyJmQM2ZZfGSLlDLuvbBG1GzfUQLqOlhuL7HYYDZKidxNI08rO6MHYuSWG/M9cBmOSQ0zRmRii6iqk7Akb4K2p5ZVgdFkcK6kMoY2YbbH3wQwZpm1o0shSNjoUsbLe17e18BMUE8z1etppGd1lVmLElgNwD77gYCrJNLoX+q/L+44D//Z'
						title='Design'
						detail='Amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis.'
					/>
				</div>
			</div>
		</div>
	);
};

export default Music;
