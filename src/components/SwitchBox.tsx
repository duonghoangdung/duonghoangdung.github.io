const SwitchBox = () => {
	return (
		<div className="switch-box text-sm font-semibold text-center">
			<input id="switch_box" className="hidden" type="checkbox" />
			<div className="switch-box__wrapper">
				<label
					htmlFor="switch_box"
					className="switch-box__item switch-box__item--true"
				>
					English
				</label>
				<label
					htmlFor="switch_box"
					className="switch-box__item switch-box__item--false"
				>
					Vietnamese
				</label>
			</div>
		</div>
	);
};

export default SwitchBox;
