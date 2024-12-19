## Goals

1. ~~cross-browser~~
2. cross-device
3. ~~dockerized~~
4. allure reports
    4.1 attaches images
    4.2 attaches video https://playwright.dev/docs/videos
5. ~~github actions~~
6. screenshot comparison https://playwright.dev/docs/screenshots    https://playwright.dev/docs/test-snapshots
7. AI support?
8. API test suite https://playwright.dev/docs/api-testing
9. DB test suite

### Goal for the next push ###
1. ~~run test suites inside Docker~~
2. ~~run docker remotely via Github Actions - https://playwright.dev/docs/ci-intro~~
3. add allure reporting https://github.com/allure-framework/allure-js/tree/main/packages/allure-playwright

Workflow code patch:
    # Allure results
    # - name: Run tests in Docker
    #   run: docker run --rm -v ${{ github.workspace }}/allure-results:/app/allure-results playwright-pet
    # - name: Install Allure CLI
    #   run: |
    #     sudo apt-get update
    #     sudo apt-get install -y openjdk-11-jre
    #     npm install -g allure-commandline --save-dev
    # - name: Generate Allure Report
    #   run: allure generate ${{ github.workspace }}/allure-results -o ${{ github.workspace }}/allure-report
    # - name: Upload Allure Report
    #   uses: actions/upload-artifact@v4
    #   with:
    #     name: allure-report
    #     path: allure-report/