A simple example of an application using AngularJS Routing with two
views:

* `/customers` - simulates a route with a repeater that shows links for
  two customers.  This route uses a `controller` with the `controllerAs`
property to "own" the route, i.e. the controller is created in the route
and is visible to the entire template.
* `/customers/:id` - a detail page that uses two separate controllers to
  view different aspects of a customer. The controllers both use
`$routeParams` to fetch the `id` of the `customer`, and render them in
different areas on the page. Also, the view of this route has a link
back to `#/customers` to go to the other route.

An exercise for this repo might be to convert it to `$scope` based
programming.

