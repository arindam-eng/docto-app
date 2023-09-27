import { useState } from 'react';

interface AutocompleteProps {
	suggestions: Record<string, any>[];
	onSelect: (value: Record<string, any>) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
	suggestions,
	onSelect,
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

	return (
		<div className='relative'>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				className='w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500 text-blue-400'
				placeholder='Search...'
				onFocus={() => {
					setShowSuggestions(true);
				}}
				onBlur={() => {
					setShowSuggestions(false);
				}}
			/>
			{showSuggestions && (
				<ul className='absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-md'>
					<li
						key={123}
						className='px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-400'
						onClick={() =>
							handleSuggestionClick({ id: 1, name: '📍 Use my location' })
						}
					>
						{'📍 Use my location'}
					</li>
					{filteredSuggestions.length > 0 &&
						inputValue &&
						filteredSuggestions.map((suggestion, index) => (
							<li
								key={index}
								className='px-4 py-2 cursor-pointer hover:bg-blue-100 text-blue-400'
								onClick={() => handleSuggestionClick(suggestion)}
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
