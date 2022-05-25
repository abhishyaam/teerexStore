import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Tooltip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
import { TeeRexState } from '../context';
import { FILTER_BY_SEARCH } from '../context/actions';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const pathname = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();
  console.log(TeeRexState());

  const { state, filtersDispatch } = TeeRexState();
  /**
   *
   * @returns searchbar if user is on the home pafe
   * else - returns null
   */
  const renderSearchBar = () => (
    <Search data-testid='test-searchbox'>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Search Products…'
        inputProps={{ 'aria-label': 'search' }}
        onChange={({ target: { value } }) => {
          filtersDispatch({
            type: FILTER_BY_SEARCH,
            payload: value,
          });
        }}
      />
    </Search>
  );

  /**
   *
   * Renders icon on Navbar based on the pathname
   *
   */
  const renderIconButton = () => {
    const icon = pathname === '' ? <ShoppingCartIcon /> : <HomeIcon />;
    const toPath = pathname === '' ? '/cart' : '/';
    const tooltipText = pathname === '' ? 'Cart' : 'Home';
    return (
      <Tooltip title={tooltipText}>
        <IconButton
          size='large'
          aria-label={``}
          color='inherit'
          onClick={() => navigate(toPath)}
        >
          {state && (
            <Badge badgeContent={state.cart.length} color='error'>
              {icon}
            </Badge>
          )}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            TeeRex Store
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {pathname === '' ? renderSearchBar() : null}
          <Box sx={{ flexGrow: 1 }} />
          <Box>{renderIconButton()}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
