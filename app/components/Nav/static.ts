const routeKeys: Map<string, number> = new Map();
//do not make key 0, it is falsly
routeKeys.set('Welcome', 1);
routeKeys.set('About', 2);
routeKeys.set('Events', 3);
routeKeys.set('Contact', 4);

export { routeKeys, };