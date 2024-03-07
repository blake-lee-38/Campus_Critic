// Function to test
function getUserFeedback(reviews) {
    let summary = {
        totalReviews: reviews.length,
        averageRating: 0,
        positive: 0,
        negative: 0
    };
    let totalRating = 0;

    reviews.forEach(review => {
        totalRating += review.rating;
        if (review.rating >= 2.5) {
            summary.positive++;
        } else {
            summary.negative++;
        }
    });

    summary.averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
    return summary;
}

// Test function
function testGetUserFeedback() {
    const reviews = [
        { rating: 5.0 },
        { rating: 4.5 },
        { rating: 2.5 },
        { rating: 2.0 },
        { rating: 1.0 }
    ];

    const expected = {
        totalReviews: 5,
        averageRating: 3,
        positive: 3,
        negative: 2
    };

    const result = getUserFeedback(reviews);

    console.assert(result.totalReviews === expected.totalReviews, `Expected totalReviews to be ${expected.totalReviews}, got ${result.totalReviews}`);
    console.assert(result.averageRating === expected.averageRating, `Expected averageRating to be ${expected.averageRating}, got ${result.averageRating}`);
    console.assert(result.positive === expected.positive, `Expected positive to be ${expected.positive}, got ${result.positive}`);
    console.assert(result.negative === expected.negative, `Expected negative to be ${expected.negative}, got ${result.negative}`);

    console.log("Test passed!");
}

testGetUserFeedback();