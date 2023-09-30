'use client';
import { RefObject, useEffect, useRef, useState } from 'react';
interface AutocompleteInputProps {
	suggestions: Record<string, any>[];
	onSelect: (value: Record<string, any>) => void;
	myLocation?: boolean;
}

const Autocomplete: React.FC<AutocompleteInputProps> = ({
	suggestions,
	onSelect,
	myLocation,
}) => {
	const [inputValue, setInputValue] = useState<string>('');
	const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);

		// Filter suggestions based on user input
		const filtered = suggestions.filter((suggestion: any) =>
			suggestion.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredSuggestions(filtered);
	};

	const handleSuggestionClick = (value: any) => {
		setInputValue(value.name);
		onSelect(value);
		setFilteredSuggestions([]); // Clear suggestions
	};

	const [showSuggestions, setShowSuggestions] = useState(false);

	const wrapperRef = useRef<any>(null);
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setShowSuggestions(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className='relative'>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				className='w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500 text-blue-400'
				placeholder={suggestions?.length > 0 ? 'Search.....' : 'Please wait...'}
				onFocus={() => {
					setShowSuggestions(true);
				}}
				disabled={suggestions?.length > 0 ? false : true}
			/>
			{showSuggestions && (
				<ul
					ref={wrapperRef}
					className='absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-md'
					style={{ maxHeight: '300px', overflowY: 'auto' }}
				>
					{myLocation && !inputValue && (
						<li
							key={123}
							className='px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-400'
							onClick={() =>
								handleSuggestionClick({
									id: 1,
									name: '📍 Use my location',
								})
							}
						>
							{'📍 Use my location'}
						</li>
					)}

					{filteredSuggestions.length > 0 &&
						inputValue &&
						filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								className='px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-400'
								onClick={(e) => {
									handleSuggestionClick(suggestion);
								}}
							>
								{suggestion.name}
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default Autocomplete;
