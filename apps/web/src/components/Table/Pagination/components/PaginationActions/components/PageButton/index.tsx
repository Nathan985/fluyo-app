import { cn } from 'src/@shared/utils';
import React from 'react';

import { IPageButtonComponentType } from './types/pageButton.component.type';
import { usePageButton } from './usePageButton';

const PageButton: React.FC<IPageButtonComponentType> = (props) => {
	const { value } = props;
	const { styleButton, onHandleClick } = usePageButton(props);

	return (
		<div onClick={() => onHandleClick(value)} className={cn(styleButton)}>
			{value}
		</div>
	);
};

export default PageButton;
