module.exports = (product, user) => {
    const isAuthor = product.creator.equals(user._id);
    const isAdmin = user.roles.indexOf('Admin') >= 0;

    return isAuthor || isAdmin;
};
