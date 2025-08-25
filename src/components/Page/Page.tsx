import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';

const PageOne = () => <Page1></Page1>;
const PageTwo = () => <Page2></Page2>;
const PageThree = () => <Page3></Page3>;
const PageFour = () => <Page4></Page4>;

const Page = () => {
    const [page, setPage] = React.useState(1);
    const pageCount = 25;

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <PageOne />;
            case 2:
                return <PageTwo />;
            case 3:
                return <PageThree />;
            case 4:
                return <PageFour />;
            default:
                return <div>Page {page} content not found.</div>;
        }
    }
    return (
        <div className='justify-center items-center mx-32'>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>

                {renderPageContent()}

                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={handleChange}
                    showFirstButton
                    showLastButton
                    siblingCount={0}
                    boundaryCount={1}
                    renderItem={(item) => {
                        const baseClass =
                            'px-4 py-1 mx-1 border rounded text-sm transition duration-200';
                        const selectedClass = 'bg-[#00B7C8] text-white border-[#00B7C8]';
                        const hoverClass = 'hover:bg-[#00B7C8] hover:text-white hover:border-[#00B7C8]';
                        const disabledClass = 'opacity-50 cursor-not-allowed';
                        const commonClass = `${baseClass} ${hoverClass} ${item.selected ? selectedClass : 'border-gray-300 text-gray-800'
                            } ${item.disabled ? disabledClass : ''}`;

                        const navLabels: Record<string, string> = {
                            first: 'First',
                            previous: 'Prev',
                            next: 'Next',
                            last: 'Last',
                        };

                        // ✅ Handle ellipsis ("...") items
                        if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
                            return (
                                <span className="px-3 py-1 mx-1 text-gray-500 select-none">...</span>
                            );
                        }

                        // ✅ Handle navigation buttons
                        if (['first', 'previous', 'next', 'last'].includes(item.type)) {
                            return (
                                <button
                                    disabled={item.disabled}
                                    onClick={item.onClick}
                                    className={commonClass}
                                >
                                    {navLabels[item.type]}
                                </button>
                            );
                        }

                        // ✅ Handle numbered page buttons
                        return (
                            <button
                                onClick={item.onClick}
                                className={commonClass}
                                disabled={item.disabled}
                            >
                                {item.page}
                            </button>
                        );
                    }}
                />



            </Stack>
        </div>
    )
}

export default Page