import{createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface initialStateTypes {
    isSidearCollapsed: boolean;
    isDarkMode : boolean;
}

const initialState :  initialStateTypes= {
    isSidearCollapsed: false,
    isDarkMode:false,
};

export const globalSlice = createSlice({
    name  : "gloabal",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state , action: PayloadAction<boolean>) => {
            state.isSidearCollapsed = action.payload;
        },
        setIsDarkMode : (state , action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    },
});


export const {setIsSidebarCollapsed , setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;
